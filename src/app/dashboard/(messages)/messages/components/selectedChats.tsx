import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SelectedChats({ typingUser,data, isSuccess, userdata }: { typingUser:string | null, data: any; isSuccess: boolean;  userdata:any}) {
  return (
    <div className="flex flex-col py-3 divide-y-[1px] justify-center divide-[#0000000A] border-[1px] border-[#0000000A] rounded-lg">
      <div className="px-4 flex pb-3 items-center gap-x-2">
        <h1 className="text-[#00000066] font-[400] text-sm">To</h1>
        <div className="flex-1">
       
         <h1 className="text-black/80 font-bold text-sm">{(data?.participants?.find((item: {_id:string}) => item?._id !== userdata?.data?._id)?.userName)}</h1>
      
        </div>
       
      </div>

      {(typingUser !== null && (typingUser !== userdata?.data?._id)) && <h1 className="text-sm font-bold pt-3 text-black ps-4">Typing...</h1>}
    </div>
  );
}
