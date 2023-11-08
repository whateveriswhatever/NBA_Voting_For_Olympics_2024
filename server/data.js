const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
  { id: 5, name: "emma" },
];

const candidates = [
  {
    name: "Lebron James",
    franchise: "Los Angeles Laker",
    imgCandidate: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612747/global/D/logo.svg",
  },
  {
    name: "Stephen Curry",
    franchise: "Golden State Warrior",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612744/primary/D/logo.svg",
  },
  {
    name: "Kevin Durant",
    franchise: "Phoenix Suns",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612756/primary/D/logo.svg",
  },
  {
    name: "Jayson Tatum",
    franchise: "Boston Celtics",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612738/global/D/logo.svg",
  },
  {
    name: "Devin Booker",
    franchise: "Phoenix Suns",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612756/primary/D/logo.svg",
  },
  {
    name: "Joel Embiid",
    franchise: "Philadelphia 76ers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612755/global/D/logo.svg",
  },
  {
    name: "Kawhi Leonard",
    franchise: "Los Angeles Clippers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg",
  },
  {
    name: "Paul Georgie",
    franchise: "Los Angeles Clippers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg",
  },
  {
    name: "Russel Westbrook",
    franchise: "Los Angeles Clippers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg",
  },
  {
    name: "Khris Middleton",
    franchise: "Miwaulkee Bucks",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg",
  },
  {
    name: "Damian Lillard",
    franchise: "Miwaulkee Bucks",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg",
  },
  {
    name: "Jimmy Butler",
    franchise: "Miami Heat",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
  },
  {
    name: "Bam Adebayo",
    franchise: "Miami Heat",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
  },
  {
    name: "Nic Claxton",
    franchise: "Brooklyn Nest",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612751/global/D/logo.svg",
  },
  {
    name: "Mikal Bridges",
    franchise: "Brooklyn Nest",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612751/global/D/logo.svg",
  },
  {
    name: "Tyrese Haliburton",
    franchise: "Indiana Pacers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612754/global/D/logo.svg",
  },
  {
    name: "Tyrese Maxey",
    franchise: "Philadelphia 76ers",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1630178.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612755/global/D/logo.svg",
  },
  {
    name: "Aaron Gordon",
    franchise: "Denver Nuggest",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612743/global/D/logo.svg",
  },
  {
    name: "De'Aaron Fox",
    franchise: "Scramento Kings",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612758/global/D/logo.svg",
  },
  {
    name: "Draymond Green",
    franchise: "Golden State Warrior",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612744/global/D/logo.svg",
  },
  {
    name: "Jaylen Brown",
    franchise: "Boston Celtics",
    imgCandidate:
      "https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png",
    imgFranchise: "https://cdn.nba.com/logos/nba/1610612738/global/D/logo.svg",
  },
];

module.exports = {
  people,
  candidates,
};
