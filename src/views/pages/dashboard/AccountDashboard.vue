<script setup>
import { ref } from 'vue';

const totalLoans = ref(1000);
const totalLoanAmount = ref("$1,000,000");
const averageProcessingTime = ref("3 days");

const loans = ref([
    { id: '001', customerName: 'John Doe', loanAmount: '$10,000', status: 'Approved' },
    // Add more data as needed
]);
</script>

<style scoped>
.dashboard {
    font-family: Arial, sans-serif;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

.summary {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.card {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
    flex: 1;
    margin-right: 10px;
}

.charts {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.chart {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
    flex: 1;
    margin-right: 10px;
}

.table {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table th,
table td {
    padding: 10px;
    border: 1px solid #ccc;
}

footer {
    background-color: #bdadad;
    color: #fff;
    text-align: center;
    padding: 10px;
}
</style>
<template>
    <div>
        <header>
            <h1>Agragoti Cooperative Societies Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="summary">
                <div class="card">
                    <h2>Total Loans Approved</h2>
                    <p>{{ totalLoans }}</p>
                </div>
                <div class="card">
                    <h2>Total Loan Amount</h2>
                    <p>{{ totalLoanAmount }}</p>
                </div>
                <div class="card">
                    <h2>Average Processing Time</h2>
                    <p>{{ averageProcessingTime }}</p>
                </div>
            </section>
            <section class="charts">
                <!-- Placeholder for charts (e.g., Chart.js) -->
                <div class="chart"></div>
                <div class="chart"></div>
            </section>
            <section class="table">
                <!-- Placeholder for data table -->
                <table>
                    <thead>
                        <tr>
                            <th>Loan ID</th>
                            <th>Customer Name</th>
                            <th>Loan Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(loan, index) in loans" :key="index">
                            <td>{{ loan.id }}</td>
                            <td>{{ loan.customerName }}</td>
                            <td>{{ loan.loanAmount }}</td>
                            <td>{{ loan.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 ERP Bank Loan System</p>
        </footer>
    </div>
</template>
