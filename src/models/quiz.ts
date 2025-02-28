interface Quiz {
    user : {
        firstname: string;
        lastname: string;
        email: string;
    }
    name: string;
    creationDate: Date;
    category : {
        category: string;
    }
    actualPrice: number;
    isPrivate: boolean;
    photoUrl: string;
    showInstantResult: boolean;
    calculateScore: boolean;
    attempts: number;
    dateScoreRelease: Date;
    description: string;
    isVisible: boolean;
    difficulty: {
        difficulty: string;
    }
    isDailyQuiz: boolean;
}