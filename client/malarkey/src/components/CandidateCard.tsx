import { useState, useEffect } from "react";

let choice_storage: any = [];

type CandidateType = {
  name: string;
  franchise: string;
  imgCandidate: string;
  imgFranchise: string;
  isSubmited: boolean;
};

export const CandidateCard: React.FC<CandidateType> = ({
  name,
  franchise,
  imgCandidate,
  imgFranchise,
  isSubmited,
}) => {
  const [picked, setPicked] = useState(false);
  const [votedCount, setVotedCount] = useState(0);

  useEffect(() => {
    isSubmited ? picked === false : picked === true;
    console.log(`isSubmitted: ${isSubmited}`);
  }, [isSubmited]);

  return (
    <div
      className="p-[2rem] flex flex-col border border-black gap-3"
      id={`card_${name}`}
    >
      <div className="justify-center items-center">
        <div className="">
          Name:
          <strong className="text-xl ms-2">{name}</strong>
        </div>
        <div>
          Franchise: <strong>{franchise}</strong>
        </div>
        <div>
          Total votes: <strong>{votedCount}</strong>
        </div>
      </div>
      <div className="w-[10rem] gap-4">
        <div className="">
          <img
            src={imgCandidate}
            alt={`${name}`}
            className="border rounded-lg"
          />
        </div>
        <div className="">
          <img
            src={imgFranchise}
            alt={franchise}
            className="border rounded-lg"
          />
        </div>
      </div>
      {picked && !isSubmited ? (
        <div
          className="text-center flex justify-center text-green-500"
          id="verified_voted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-check2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </div>
      ) : (
        <></>
      )}
      <div>
        <button
          className="border border-black w-20 h-10 hover:bg-sky-700 hover:text-white"
          // disabled={picked ? true : false}
          onClick={() => {
            setPicked(!picked);
            console.log(`picked : ${picked}`);
            setVotedCount((prev) => prev + 1);
            console.log(`Voted for ${name}`);
            if (!picked) {
              const candidateInfor = {
                name: name,
                franchise: franchise,
              };
              choice_storage.push(candidateInfor);
            } else {
              const newChoiceStorage = choice_storage.filter(
                (choice: any) => choice.name !== name
              );
              choice_storage = newChoiceStorage;
            }
            console.log(`choice_storage : ${choice_storage}`);
            let keys = Object.keys(choice_storage);
            keys.map((key) => console.log(`key : ${key}`));
            let values = Object.values(choice_storage);
            values.map((value) => console.log(value));
          }}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default choice_storage;
