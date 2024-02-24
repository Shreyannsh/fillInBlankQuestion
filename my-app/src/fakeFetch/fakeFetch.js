export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/questions") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            questions: [
              {
                id: 1,
                question: "I {[play][hate][love]} soccer",
                answered: "",
              },
              { id: 2, question: "She {[reads][writes]} books", answered: "" },
              {
                id: 3,
                question: "They {[eat][cook][sleep]} at the restaurant",
                answered: "",
              },
              { id: 4, question: "He {[plays][watches]} guitar", answered: "" },
              {
                id: 5,
                question: "We {[study][party][work]} on weekends",
                answered: "",
              },
              {
                id: 6,
                question: "The cat {[sleeps][plays][hunts]} during the day",
                answered: "",
              },
              {
                id: 7,
                question: "You {[travel][paint][code]} in your free time",
                answered: "",
              },
              {
                id: 8,
                question: "The team {[wins][loses][ties]} every match",
                answered: "",
              },
              {
                id: 9,
                question: "I {[eat][avoid][crave]} spicy food",
                answered: "",
              },
              {
                id: 10,
                question: "She {[loves][dislikes][ignores]} pineapple on pizza",
                answered: "",
              },
              {
                id: 11,
                question: "They {[listen to][create][dance to]} music",
                answered: "",
              },
              {
                id: 12,
                question: "He {[watches][plays][ignores]} the news",
                answered: "",
              },
              {
                id: 13,
                question: "We {[visit][ignore][explore]} new places",
                answered: "",
              },
              {
                id: 14,
                question:
                  "The dog {[barks at][sleeps through][chases]} thunderstorms",
                answered: "",
              },
              {
                id: 15,
                question: "You {[exercise][meditate][procrastinate]} regularly",
                answered: "",
              },
              {
                id: 16,
                question: "The movie {[entertains][bores][inspires]} me",
                answered: "",
              },
              {
                id: 17,
                question: "I {[love][hate][tolerate]} rainy days",
                answered: "",
              },
              {
                id: 18,
                question: "She {[learns][teaches][forgets]} quickly",
                answered: "",
              },
              {
                id: 19,
                question:
                  "They {[play][watch][analyze]} football every weekend",
                answered: "",
              },
              {
                id: 20,
                question: "He {[cooks][eats][orders]} dinner every night",
                answered: "",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Questions not found.",
        });
      }
    }, 2000);
  });
};
