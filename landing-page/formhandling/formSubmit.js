import axios from 'axios';

const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeMsGqpxKRIjnzlKsKNrhg9DNzpkmn6XMJPtXwg4LBU2xsMPg/formResponse";

export const submitForm = async (email) => {
  try {
    const formData = new URLSearchParams();
    formData.append('entry.1563724321', email);

    await axios.post(googleFormURL, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to submit the form.');
  }
};
