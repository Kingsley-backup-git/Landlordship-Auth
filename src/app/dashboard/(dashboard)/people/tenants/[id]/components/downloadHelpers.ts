import { PaymentHistoryItem, PersonalData, LeaseData, TenantData } from "./types";

export const downloadLeaseAgreement = (
  personalData: PersonalData,
  leaseData: LeaseData
) => {
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
>>
>>
endobj
4 0 obj
<<
/Length 100
>>
stream
BT
/F1 12 Tf
100 700 Td
(Lease Agreement) Tj
0 -20 Td
(${personalData.name}) Tj
0 -20 Td
(${leaseData.monthlyRent}) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000306 00000 n
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
406
%%EOF`;

  const blob = new Blob([pdfContent], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `Lease_Agreement_${personalData.name.replace(/\s+/g, "_")}.pdf`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadPaymentReceipt = (
  payment: PaymentHistoryItem,
  personalData: PersonalData,
  propertyName: string
) => {
  const receiptHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Receipt - ${payment.period}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 24px; color: #000; }
          .details { margin: 30px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .detail-label { color: #666; font-size: 14px; }
          .detail-value { color: #000; font-size: 14px; font-weight: 600; }
          .amount { text-align: center; margin: 30px 0; padding: 20px; background: #f9f9fa; border-radius: 8px; }
          .amount-value { color: #000; font-size: 32px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Payment Receipt</h1>
          <p>${personalData.name}</p>
          <p>${propertyName}</p>
        </div>
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Period:</span>
            <span class="detail-value">${payment.period}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Payment Date:</span>
            <span class="detail-value">${new Date(payment.date).toLocaleDateString()}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Method:</span>
            <span class="detail-value">${payment.method}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Reference:</span>
            <span class="detail-value">${payment.reference}</span>
          </div>
        </div>
        <div class="amount">
          <div class="amount-value">$${payment.amount.toLocaleString()}</div>
        </div>
      </body>
    </html>
  `;

  const blob = new Blob([receiptHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `Receipt_${payment.period.replace(/\s+/g, "_")}_${personalData.name.replace(/\s+/g, "_")}.html`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportPaymentHistory = (
  paymentHistory: Array<{ month: string; amount: number; status: string; date: string }>,
  tenantName: string
) => {
  const csvHeaders = ["Month", "Amount", "Status", "Date Paid"];
  const csvRows = paymentHistory.map((payment) => [
    payment.month,
    `$${payment.amount.toLocaleString()}`,
    payment.status,
    payment.date,
  ]);

  const csvContent = [
    csvHeaders.join(","),
    ...csvRows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${tenantName}_Payment_History_${new Date().toISOString().split("T")[0]}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadReceipt = (
  payment: { month: string; amount: number; status: string; date: string },
  tenantData: TenantData
) => {
  const receiptHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Receipt - ${payment.month}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 24px; color: #000; }
          .header p { margin: 5px 0; color: #666; font-size: 14px; }
          .details { margin: 30px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
          .detail-label { color: #666; font-size: 14px; }
          .detail-value { color: #000; font-size: 14px; font-weight: 600; }
          .amount { text-align: center; margin: 30px 0; padding: 20px; background: #f9f9fa; border-radius: 8px; }
          .amount-label { color: #666; font-size: 14px; margin-bottom: 5px; }
          .amount-value { color: #000; font-size: 32px; font-weight: bold; }
          .footer { margin-top: 40px; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Payment Receipt</h1>
          <p>${tenantData.name}</p>
          <p>${tenantData.propertyName}</p>
        </div>
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">Payment Month:</span>
            <span class="detail-value">${payment.month}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Payment Date:</span>
            <span class="detail-value">${payment.date}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Status:</span>
            <span class="detail-value">${payment.status}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Property:</span>
            <span class="detail-value">${tenantData.propertyName}</span>
          </div>
        </div>
        <div class="amount">
          <div class="amount-label">Amount Paid</div>
          <div class="amount-value">$${payment.amount.toLocaleString()}</div>
        </div>
        <div class="footer">
          <p>This is a computer-generated receipt.</p>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
      </body>
    </html>
  `;

  const blob = new Blob([receiptHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `Receipt_${payment.month.replace(/\s+/g, "_")}_${tenantData.name.replace(/\s+/g, "_")}.html`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};


