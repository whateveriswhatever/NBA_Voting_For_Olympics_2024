import { useState, useEffect } from "react";
import { CandidateCard } from "./components/CandidateCard";
import "./App.css";
import axios from "axios";
import choice_storage from "./components/CandidateCard";

const votedCandidates: any = [];
let check = Object.values(choice_storage);
check.forEach((cand) => votedCandidates.push(cand));
let loz = Object.values(votedCandidates);

interface User {
  id: number;
  name: string;
}

interface Candidate {
  name: string;
  franchise: string;
  imgCandidate: string;
  imgFranchise: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log(`starting to fetch...`);
    fetch("http://localhost:5000/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }, [setCandidates]);

  return (
    <div>
      <div id="header" className="">
        <h2 className="">NBA voting for Olympics 2024</h2>
      </div>
      <div id="main">
        {candidates.map((candidate) => (
          <CandidateCard
            name={candidate.name}
            franchise={candidate.franchise}
            imgCandidate={candidate.imgCandidate}
            imgFranchise={candidate.imgFranchise}
            isSubmited={submitted ? true : false}
          />
        ))}
      </div>
      <div>
        <button
          className="border border-black-400 p-[1rem] mt-[1rem] bg-slate-500 text-[#eee] hover:bg-violet-600"
          onClick={async () => {
            try {
              setSubmitted(true);
              const result: any = axios.post(
                "http://localhost:5000/api/voted_result",
                {
                  result: choice_storage,
                }
              );
              console.log(`result for posting : ${result}`);
              console.log(`candidates: ${choice_storage}`);
            } catch (err: any) {
              console.log(err.message);
            }
          }}
        >
          <a href="http://localhost:5000/voting_result">SUBMIT</a>
        </button>
      </div>
    </div>
  );
}

export default App;
