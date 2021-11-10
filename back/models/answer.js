module.exports = mongoose => {
    const Answers = mongoose.model("answers",
        mongoose.Schema({
            id_questions: String,
            id_user: String,
            answer_content: String
        })
    );

    return Answers;
};