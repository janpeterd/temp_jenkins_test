interface QuizQuestion {
    question : {
        question: string;
        creationDate: Date;
    }
    quiz : {
        name: string;
        creationDate: Date;
        actualPrice: number;
        isPrivate: boolean;
        photoUrl: string;
        showInstantResult: boolean;
        calculateScore: boolean;
        attempts: number;
        dateScoreRelease: Date;
        description: string;
        isVisible: boolean;
        isDailyQuiz: boolean;
    }
    weightScore: number;
}