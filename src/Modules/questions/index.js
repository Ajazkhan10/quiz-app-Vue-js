import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  // namespaced:true,
  state() {
    return {
      quiz: [
        {
          catogory: "General Knowledge",
          question: "What was Meta Platforms Inc formerly known as?",
          answear: [
            { option: "Facebook", correct: true },
            { option: "instagram", correct: false },
            { option: "whatsapp", correct: false },
            { option: "tiktok", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "In 1768, Captain James Cook set out to explore which ocean?",
          answear: [
            { option: " Pacific Ocean", correct: true },
            { option: "Atlantic Ocean", correct: false },
            { option: " Indian Ocean", correct: false },
            { option: "Arctic Ocean", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "What is actually electricity?",
          answear: [
            { option: " A flow of water", correct: false },
            { option: "A flow of air", correct: false },
            { option: " A flow of electrons", correct: true },
            { option: "A flow of atoms", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "Which of the following is not an international organisation?",
          answear: [
            { option: "NATO", correct: false },
            { option: "FIFA", correct: true },
            { option: "ASEAN", correct: false },
            { option: "FBI", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            " Which of the following disorders is the fear of being alone?",
          answear: [
            { option: "Aerophobia", correct: false },
            { option: "Acrophobia", correct: false },
            { option: "Agoraphobia", correct: true },
            { option: "Arachnophobia", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            " Which of the following is a song by the German heavy metal band “Scorpions”?",
          answear: [
            { option: "Wind of Changer", correct: true },
            { option: "Stairway to Heaven", correct: false },
            { option: "Don’t Stop Me Now", correct: false },
            { option: "Hey Jude", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "What is the speed of sound?",
          answear: [
            { option: " 1,200 km/h", correct: true },
            { option: "120 km/h", correct: false },
            { option: "400 km/h", correct: false },
            { option: "800 km/h", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "Which is the easiest way to tell the age of many trees?",
          answear: [
            { option: "To count the rings on the trunk", correct: true },
            { option: " To measure the width of the tree", correct: false },
            { option: " To count the number of leaves", correct: false },
            { option: " To measure the height of the tree", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question: " Which did Viking people use as money?",
          answear: [
            { option: "Rune stones", correct: false },
            { option: "Jewellery", correct: true },
            { option: "Seal skins", correct: false },
            { option: "Wool", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "What was the first country to use tanks in combat during World War I?",
          answear: [
            { option: " France", correct: false },
            { option: "Japan", correct: false },
            { option: " Britain", correct: true },
            { option: "Germany", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "What is the main component of the sun?",
          answear: [
            { option: "Liquid lava", correct: false },
            { option: "Gas", correct: true },
            { option: "Molten iron", correct: false },
            { option: "Rock", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "Which two months are named after Emperors of the Roman Empire?",
          answear: [
            { option: " January and February", correct: false },
            { option: " March and April", correct: false },
            { option: "May and June", correct: false },
            { option: "July and August", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "In which year of First World War Germany declared war on Russia and France?",
          answear: [
            { option: "1914", correct: true },
            { option: " 1915", correct: false },
            { option: "1916", correct: false },
            { option: "1917", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "ICAO stands for",
          answear: [
            {
              option: "International Civil Aviation Organization",
              correct: false,
            },
            {
              option: "Indian Corporation of Agriculture Organizatio",
              correct: false,
            },
            {
              option: "Institute of Company of Accounts Organization",
              correct: false,
            },
            { option: "None of the above", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "The chief constituent of gobar gas is",
          answear: [
            { option: "ethane ", correct: false },
            { option: "methane", correct: false },
            { option: "hydrogen", correct: false },
            { option: "carbon dioxide", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question: "The Enron project is a",
          answear: [
            { option: "hydro-electric projec", correct: false },
            { option: "thermal power project", correct: false },
            { option: "atomic power project", correct: false },
            { option: "gas-fired power project", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "World's busiest airports by passenger traffic is",
          answear: [
            { option: "Hartsfield-Jackson Atlanta International Airport, USA ", correct: false },
            { option: "Lhasa Airport, Tibet", correct: false },
            { option: "King Abdul Aziz International Airport, Saudi Arabia", correct: true },
            { option: "Chicago O' Hare International Airport, USA", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "The element of an electric stove made",
          answear: [
            { option: "copper", correct: false },
            { option: "invar", correct: false },
            { option: "magnalium", correct: false },
            { option: "nicrome", correct: true },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "The blood pressure of a young male human being is",
          answear: [
            { option: "110/70 ", correct: false },
            { option: "120/80", correct: true },
            { option: "	135/90", correct: false },
            { option: "	140/100", correct: false },
          ],
        },
        {
          catogory: "General Knowledge",
          question:
            "The electron was first identified by",
          answear: [
            { option: "	J. J. Thompson", correct: false },
            { option: "J. Kepler", correct: false },
            { option: "	D. Rutherford", correct: false },
            { option: "	James Chadwick", correct: true },
          ],
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};
