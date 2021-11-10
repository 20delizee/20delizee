module.exports = mongoose => {
    const question = mongoose.model("question",
        mongoose.Schema({

            question: String,
            type_question: String,
            id_questions: String,
            question_answer: Array,
            nom_questionnaire: [{type: mongoose.Schema.Types.ObjectId, ref: 'matieres'}]
        })
    );
    return question;
};