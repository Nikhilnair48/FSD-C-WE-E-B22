import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// RTK Query API slice: defines the endpoints and hooks

export const flashcardsApi = createApi({
    reducerPath: "flashcardsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com/"}),
    endpoints: (builder) => {
        getFlashcards: builder.query({
            query: () => "api.php?amount=5&type=multiple",
            transformResponse: (response) => {
                response.results.map(card => ({
                    question: card.question,
                    answer: card.correct_answer
                }))
            }
        })
    }
})

export const { useGetFlashcardsQuery }= flashcardsApi;