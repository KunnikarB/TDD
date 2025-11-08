export async function fetchAdviceById(id) {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}
