let todoList = JSON.parse(localStorage.getItem('todoList')) || [{}];
        displayTodo();
        function displayTodo(){
            let todoListHtml = '';
            for (let i = 0;i<todoList.length;i++){
                const todoObject = todoList[i];
                // const name = todoObject.name;
                // const dueDate = todoObject.dueDate;
                const {name,dueDate} = todoObject;
                const html = `
                <div>${name}</div>
                <div> ${dueDate} </div>
                <button class="delete-button" onclick="
                        todoList.splice(${i},1);
                        displayTodo();
                        // Whenever we update the todo list, save in localStorage.
                        saveToStorage();
                            ">Delete</button>
            `;
                todoListHtml += html;
            }
            document.querySelector('.js-todo-list')
                .innerHTML = todoListHtml;
        }
        function addTodo(){
            const inputName = document.querySelector('.js-name-input');
            const inputDueDate = document.querySelector('.js-date-input');
            const dueDate = inputDueDate.value;
            const name = inputName.value;

            todoList.push({
                //name: name,dueDate: dueDate
                name,dueDate
            });
            inputName.value = '';
            inputDueDate.value = '';
            displayTodo();
            saveToStorage();
        }
        function saveToStorage() {
            localStorage.setItem('todoList', JSON.stringify(todoList));
            }