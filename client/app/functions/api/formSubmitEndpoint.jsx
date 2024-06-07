//* Send order data to the server using fetch
export const submitFormData = async orderData => {
  try {
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.log(errorData)
      return errorData.errors //? Return the validation errors
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
