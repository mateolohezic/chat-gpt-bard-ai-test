const { OpenAI } = require("openai");

const askGPT = async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
    })
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Crea un plan de comidas de 7 días con 3 comidas al día que incluya frutas, verduras, proteínas y carbohidratos. Evita los alimentos con gluten y lácteos. Considera las alergias alimentarias e intolerancias.' }],
      temperature: 0.2,
      stream: false,
      top_p: 0.1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // console.log(chatCompletion.choices[0].message.content);
    res.status(200).json(chatCompletion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const trainingModel = async () => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
    })

    const chatCompletion = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0613:personal::8BSu7kqn',
      messages: [{ role: 'user', content: 'Nico me manda diseños imposibles de hacer, y no se cuanto más pueda mantener la mentira de decir "Eso no se puede hacer"!' }],
      stream: false,
    });
    console.log('--------------------------------------------------------------------------------------------------------------------');
    console.log(chatCompletion.choices[0].message.content);
    console.log('--------------------------------------------------------------------------------------------------------------------');
    console.log(chatCompletion);

    // res.status(200).json(chatCompletion);
  } catch (error) {
    console.log(error);
    // res.status(500).json({ error: error.message });
  }
};

// trainingModel()
module.exports = { askGPT };