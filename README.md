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

4. **PostgreSQL Integration:**
   - Integrated **PostgreSQL** as the relational database for storing data.
   - Configured separate PostgreSQL databases for each service (`books`, `customers`, `orders`).
   - Set up database connections using environment variables and ORM (e.g., TypeORM or Sequelize) for easy management of database operations.

---

## Technologies Used 🧰
- **NestJS**: Framework for building efficient and scalable server-side applications.
- **RabbitMQ**: Message broker for inter-service communication.
- **CloudAMQP**: Hosted RabbitMQ platform for managing message brokers.
- **PostgreSQL**: Relational database used for storing and managing data for `Books`, `Customers`, and `Orders` services.

---

## How to Run the Project 🏃‍♂️

To run the LookBook project locally, follow these steps:

1. **Clone the Repository:**

```bash
git clone <repository_url>
cd lookbook
```

2. **Install Dependencies:**
Make sure you have Node.js installed, then install dependencies for each service:

```bash
npm install
```

3. **Set up PostgreSQL Database:**

- Install PostgreSQL locally or use a cloud-based service like ElephantSQL.
- Create a new database for each service (books, customers, orders).
- Add the connection URL to the environment variables in each service configuration file.
  
4. **Set up RabbitMQ on CloudAMQP:**

- Go to the CloudAMQP website and sign up/login.
- Create a new RabbitMQ instance and obtain the connection URL.
- Add the connection URL to the environment variables in each service configuration file.
  
5. **Run the Services:**
Start each service individually

```bash
# Start Books Service
npm run start:books

# Start Customers Service
npm run start:customers

# Start Orders Service
npm run start:orders
```

6. **Verify Services Are Running:**
You should now have the three services running and connected via RabbitMQ and PostgreSQL.

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

## Project Reference Link 🔗
You can refer to this project for further details or contributions: [HOW TO SETUP A MICROSERVICE WITH NESTJS, RABBITMQ, TYPEORM AND POSTGRES](https://medium.com/@ryanmambou/how-to-setup-a-microservice-with-nestjs-rabbitmq-typeorm-and-postgres-2eb691c17e17)
