import { useState } from "react";
import Image from "next/image";
import { getStatusBadge } from "../../properties/[id]/components/utils";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const priorityColor:any = {
  low: "bg-gray-100 text-gray-600",
  medium: "bg-blue-100 text-blue-700",
  high: "bg-orange-100 text-orange-700",
  urgent: "bg-red-100 text-red-700",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AgentRequestPage({agentData}: {agentData: any}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any>({});

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl text-black font-semibold mb-6">Maintenance Requests</h1>

      {/* REQUEST LIST */}
      <div className="space-y-4">
        {agentData.map((req: {
          _id: string;
          priority: string;
description:string;
          title: string;
          status:string
        }) => (
          <div
            key={req._id}
            onClick={() => {setSelected(req)
              console.log(req)
            }}
            className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition cursor-pointer"
          >
            <div className="space-y-2">
              <h2 className="font-medium text-lg text-gray-500">{req.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2">
                {req.description}
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${priorityColor[req?.priority]}`}
                >
                  {req.priority}
                </span>
                <span className="text-xs px-2 py-1 rounded-full border text-gray-600">
                  {getStatusBadge(req?.status)}
                </span>
              </div>
            </div>

            {req.status === "assigned_pending" && (
              <div className="flex gap-2 sm:self-end">
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-sm text-red-400 border rounded-lg hover:bg-red-300"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:opacity-90"
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* DETAILS MODAL */}
      {Object.values(selected).length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-xl p-6 relative">
            <button
              onClick={() => setSelected({})}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-2">{selected.title}</h2>
            <p className="text-gray-600 mb-4">{selected.description}</p>

            <div className="flex gap-2 mb-4">
              <span
                className={`text-xs px-2 py-1 rounded-full ${priorityColor[selected?.priority]}`}
              >
                {selected?.priority}
              </span>
              <span className="text-xs px-2 py-1 rounded-full border text-gray-600">
                {getStatusBadge(selected?.status)}
              </span>
            </div>

            {/* IMAGES SECTION (FULLY GUARDED) */}
            {(Array.isArray(selected.images) && selected.images.length > 0) ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selected.images.map((img: {public_id : string; url : string}) => (
                  <div
                    key={`${img?.public_id}-img`}
                    className="relative h-32 w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img?.url}
                      alt="maintenance"
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                     
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">
                No images attached to this request.
              </p>
            )}

            {selected.status === "assigned_pending" && (
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 text-sm border rounded-lg text-red-400  hover:bg-red-300"
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:opacity-90"
                >
                  Accept
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
