// FRONT-END (CLIENT) JAVASCRIPT HERE

// Get todos and make table
async function fetchTodosAndRender() {
  const res = await fetch("/todos");
  const data = await res.json();
  renderTable(data.todos || []);
}

// Create the table rows based on the array of data
function renderTable(todos) {
  // Based on id "todoTbody"
  const tbody = document.querySelector("#todoTbody");
  tbody.innerHTML = ""; // So Redraws

  // For each todo create a row with 3 columns
  todos.forEach(t => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = t.name;

    const tdDeadline = document.createElement("td");
    tdDeadline.textContent = t.deadline;

    const tdImportance = document.createElement("td");
    tdImportance.textContent = t.importance;

    const tdDays = document.createElement("td");
    tdDays.textContent = t.daysLeft;

    tr.append(tdName, tdDeadline, tdImportance, tdDays);
    tbody.appendChild(tr);
  });
}

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault() 
  
  const name = document.querySelector("#todoName").value.trim();
  const deadline = document.querySelector("#todoDeadline").value;
  const importance = document.querySelector('input[name="importance"]:checked').value;
  
  const body = JSON.stringify({ name, deadline, importance });

  const response = await fetch( "/submit", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body 
  })

  const data = await response.json()
  console.log( "data:", data )
  renderTable(data.todos || []);

  // Reset Form
  document.querySelector("#TodoForm").reset();
  document.querySelector('input[name="importance"][value="low"]').checked = true;
}

window.onload = function() {
  // Only submit triggers 
  document.querySelector("#TodoForm").addEventListener("submit", submit);
  fetchTodosAndRender();
}