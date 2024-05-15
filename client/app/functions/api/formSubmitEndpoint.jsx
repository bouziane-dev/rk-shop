//* Send order data to the server using fetch
export const submitFormData = async (orderData) => {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error; //? Rethrow the error to handle it in the component
    }
  };