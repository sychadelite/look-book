# LookBook 📚

LookBook is a library management application designed using microservices architecture. It leverages **NestJS** for service development and **RabbitMQ** (hosted on **CloudAMQP**) as the messaging broker to ensure seamless communication between services.

## Features 🛠️
- **Books Service:** Manage information about books in the library.
- **Customers Service:** Keep track of library users and their details.
- **Orders Service:** Handle book lending and return operations.

---

## Project Progress 🚀

1. **Setup Project Structure:**
   - Created a new project structure with separate services for `Books`, `Customers`, and `Orders`.

2. **RabbitMQ Integration:**
   - Established messaging between services using **RabbitMQ**.
   - Configured RabbitMQ instance on the **CloudAMQP** platform.

3. **CloudAMQP Instance:**
   - Created a new CloudAMQP instance named `LookBook-MQ` to host the message broker.

---

## Technologies Used 🧰
- **NestJS**: Framework for building efficient and scalable server-side applications.
- **RabbitMQ**: Message broker for inter-service communication.
- **CloudAMQP**: Hosted RabbitMQ platform for managing message brokers.

---

## Next Steps ⏭️
- Develop endpoints for the `Books`, `Customers`, and `Orders` services.
- Implement message-based communication between the services.
- Write unit and integration tests for the application.

---

## Contributing 🤝
Feel free to fork this repository and contribute to the project! Whether it's fixing bugs, improving documentation, or adding new features, all contributions are welcome.

---

## License 📝
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
