export const fakeFetch = (
  url,
  modifyAnswered = false,
  modifybookmark = false,
  id,
  isCorrect,
  answer,
  isbookmarked
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/questions") {
        const storedData = sessionStorage.getItem("fakeFetchData");

        const initialData = {
          questions: [
            {
              id: 1,
              question:
                "I {[play][hate][love]} soccer but I {[enjoy]} studying",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 2,
              question: "She {[reads][writes]} books and {[recite]} poems",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 3,
              question: "They {[eat][cook][sleep]} at the restaurant.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 4,
              question:
                "He {[plays][watches]} guitar and {[sings,write]} songs",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 5,
              question: "We {[study][party][work]} on weekends.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 6,
              question: "The cat {[sleeps][plays][hunts]} during the day.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 7,
              question: "You {[travel][paint][code]} in your free time.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 8,
              question: "The team {[wins][loses][ties]} every match.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 9,
              question: "I {[eat][avoid][crave]} spicy food.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 10,
              question: "She {[loves][dislikes][ignores]} pineapple on pizza.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 11,
              question:
                "They {[listen][create][enjoy]} music and {[eats]} at restaurants",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 12,
              question: "He {[watches][plays][ignores]} the news.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 13,
              question: "We {[visit][ignore][explore]} new places.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 14,
              question: "The dog {[barks][sleeps][chases]} thunderstorms.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 15,
              question: "You {[exercise][meditate][procrastinate]} regularly.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 16,
              question: "The movie {[entertains][bores][inspires]} me.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 17,
              question: "I {[love][hate][tolerate]} rainy days.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 18,
              question: "She {[learns][teaches][forgets]} quickly.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 19,
              question: "They {[play][watch][analyze]} football every weekend.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 20,
              question: "He {[cooks][eats][orders]} dinner every night.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 21,
              question:
                "I {[run][walk][skip]} every morning and it is a {[daily][regular]} routine.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 22,
              question: "She {[paints][draws][sculpts]} beautiful artworks.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 23,
              question:
                "They {[travel][explore][relax]} during their vacations.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 24,
              question: "He {[codes][debugs][deploys]} software applications.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 25,
              question: "We {[read][write][edit]} novels in our book club.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 26,
              question:
                "The cat {[sleeps][plays][pounces]} on unsuspecting prey.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 27,
              question:
                "You {[cook][bake][grill]} delicious meals on weekends.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
            {
              id: 28,
              question: "The team {[wins][loses][ties]} every important match.",
              answered: "",
              answer: [],
              isFlaged: false,
            },
          ],
        };

        const response = {
          status: 200,
          message: "Success",
          data: storedData ? JSON.parse(storedData) : initialData,
        };

        if (modifyAnswered) {
          const questionToModify = id;

          const modifiedQuestions = response.data.questions.map((question) => {
            if (question.id === questionToModify) {
              return {
                ...question,
                answered: isCorrect,
                answer: answer,
              };
            }
            return question;
          });

          response.data.questions = modifiedQuestions;
          sessionStorage.setItem(
            "fakeFetchData",
            JSON.stringify(response.data)
          );
        }
        if (modifybookmark) {
          const questionToModify = id;
          const modifiedQuestions = response.data.questions.map((question) => {
            if (question.id === questionToModify) {
              return { ...question, isFlaged: isbookmarked };
            }
            return question;
          });

          response.data.questions = modifiedQuestions;
          sessionStorage.setItem(
            "fakeFetchData",
            JSON.stringify(response.data)
          );
        }

        resolve(response);
      } else {
        reject({
          status: 404,
          message: "Questions not found.",
        });
      }
    }, 2000);
  });
};
