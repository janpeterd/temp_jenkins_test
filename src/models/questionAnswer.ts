interface QuestionAnswer {
    answer: string;
    isCorrect: boolean;
    question: {
        question: string;
        creationDate: Date;
    }
    isCaseSensitive: boolean;
}