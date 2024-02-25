export const fakeFetch = (url, modifyAnswered = false, id, answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/questions") {
        const response = {
          status: 200,
          message: "Success",
          data: {
            questions: [
              {
                id: 1,
                question: "I {[play][hate][love]} soccer",
                answered: "",
                isFlaged: false,
              },
              {
                id: 2,
                question: "She {[reads][writes]} books",
                answered: "",
                isFlaged: false,
              },
              {
                id: 3,
                question: "They {[eat][cook][sleep]} at the restaurant",
                answered: "",
                isFlaged: false,
              },
              {
                id: 4,
                question: "He {[plays][watches]} guitar",
                answered: "",
                isFlaged: false,
              },
              {
                id: 5,
                question: "We {[study][party][work]} on weekends",
                answered: "",
                isFlaged: false,
              },
              {
                id: 6,
                question: "The cat {[sleeps][plays][hunts]} during the day",
                answered: "",
                isFlaged: false,
              },
              {
                id: 7,
                question: "You {[travel][paint][code]} in your free time",
                answered: "",
                isFlaged: false,
              },
              {
                id: 8,
                question: "The team {[wins][loses][ties]} every match",
                answered: "",
                isFlaged: false,
              },
              {
                id: 9,
                question: "I {[eat][avoid][crave]} spicy food",
                answered: "",
                isFlaged: false,
              },
              {
                id: 10,
                question: "She {[loves][dislikes][ignores]} pineapple on pizza",
                answered: "",
                isFlaged: false,
              },
              {
                id: 11,
                question: "They {[listen to][create][dance to]} music",
                answered: "",
                isFlaged: false,
              },
              {
                id: 12,
                question: "He {[watches][plays][ignores]} the news",
                answered: "",
                isFlaged: false,
              },
              {
                id: 13,
                question: "We {[visit][ignore][explore]} new places",
                answered: "",
                isFlaged: false,
              },
              {
                id: 14,
                question:
                  "The dog {[barks at][sleeps through][chases]} thunderstorms",
                answered: "",
                isFlaged: false,
              },
              {
                id: 15,
                question: "You {[exercise][meditate][procrastinate]} regularly",
                answered: "",
                isFlaged: false,
              },
              {
                id: 16,
                question: "The movie {[entertains][bores][inspires]} me",
                answered: "",
                isFlaged: false,
              },
              {
                id: 17,
                question: "I {[love][hate][tolerate]} rainy days",
                answered: "",
                isFlaged: false,
              },
              {
                id: 18,
                question: "She {[learns][teaches][forgets]} quickly",
                answered: "",
                isFlaged: false,
              },
              {
                id: 19,
                question:
                  "They {[play][watch][analyze]} football every weekend",
                answered: "",
                isFlaged: false,
              },
              {
                id: 20,
                question: "He {[cooks][eats][orders]} dinner every night",
                answered: "",
                isFlaged: false,
              },
            ],
          },
        };

        if (modifyAnswered) {
          // Modify the answered key for a specific question
          const questionToModify = id; // Change this to the desired question ID
          const modifiedQuestions = response.data.questions.map((question) => {
            if (question.id === questionToModify) {
              return { ...question, answered: answer };
            }
            return question;
          });

          response.data.questions = modifiedQuestions;
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
