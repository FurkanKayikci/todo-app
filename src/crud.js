import axios from "axios";

export default {
  getData() {
    axios
      .get("https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json")
      .then(response => {
        return response.data;
      })
      .catch(/*e => console.log(e)*/);
  }
};
