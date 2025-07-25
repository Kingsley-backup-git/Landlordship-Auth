import React from "react";
import Contact1 from "../../../../../../../../public/contact1.png";
import Contact2 from "../../../../../../../../public/contact2.png";
import Contact3 from "../../../../../../../../public/contact3.png";
import Contact4 from "../../../../../../../../public/contact4.png";
import Contact5 from "../../../../../../../../public/contact5.png";
import Image from "next/image";
export default function MiniContact() {
  const contacts = [
    {
      img: Contact1,
      username: "Natali Craig",
    },
    {
      img: Contact2,
      username: "Drew Cano",
    },
    {
      img: Contact3,
      username: "Andi Lane",
    },
    {
      img: Contact4,
      username: "Koray Okumus",
    },
    {
      img: Contact5,
      username: "Kate Morrison",
    },
    {
      img: Contact5,
      username: "Melody Macy",
    },
    {
      img: Contact4,
      username: "Koray Okumus",
    },
  ];
  return (
    <div className="mt-6 w-[100%]">
      <h1 className="text-white/80 font-[400] text-xs">Contacts</h1>

      <div className={`flex flex-col gap-y-2 mt-3 h-[250px] overflow-hidden `}>
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="py-2 flex gap-x-2 items-center ps-2">
              <Image
                src={contact.img}
                className="rounded-full"
                alt=""
                width={28}
                height={24}
              />

              <div className="flex-1">
                <h1 className="text-white/80 font-[400] text-[11px]">
                  {contact.username}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
