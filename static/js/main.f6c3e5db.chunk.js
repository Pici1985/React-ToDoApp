(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{13:function(C,t,e){},14:function(C,t,e){},16:function(C,t,e){"use strict";e.r(t);var c=e(1),o=e.n(c),s=e(7),n=e.n(s),a=(e(13),e(3)),l=(e(14),e(8)),i=e(0),r=function(C){var t=C.inputText,e=C.setInputText,c=C.todos,o=C.setTodos,s=C.setStatus;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"input-button",children:[Object(i.jsx)("input",{value:t,onChange:function(C){e(C.target.value)},type:"text",className:"todo-input"}),Object(i.jsx)("button",{onClick:function(C){C.preventDefault(),o([].concat(Object(l.a)(c),[{text:t,completed:!1,id:Math.random()+1e3}])),e("")},className:"todo-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(C){s(C.target.value)},name:"todos",className:"filter-todo",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},d=e(6),j=function(C){var t=C.text,e=C.todo,c=C.todos,o=C.setTodos;return Object(i.jsxs)("div",{className:"todo",children:[Object(i.jsx)("li",{className:"todo-item ".concat(e.completed?"completed":""),children:t}),Object(i.jsx)("button",{onClick:function(){o(c.map((function(C){return C.id===e.id?Object(d.a)(Object(d.a)({},C),{},{completed:!C.completed}):C})))},className:"complete-btn",children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{onClick:function(){o(c.filter((function(C){return C.id!==e.id})))},className:"trash-btn",children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})},u=function(C){var t=C.todos,e=C.setTodos,c=C.filteredTodos;return Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:c.map((function(C){return Object(i.jsx)(j,{text:C.text,todos:t,setTodos:e,todo:C},C.id)}))})})};var b=function(){var C=Object(c.useState)(""),t=Object(a.a)(C,2),e=t[0],o=t[1],s=Object(c.useState)([]),n=Object(a.a)(s,2),l=n[0],d=n[1],j=Object(c.useState)("all"),b=Object(a.a)(j,2),f=b[0],p=b[1],O=Object(c.useState)([]),h=Object(a.a)(O,2),m=h[0],x=h[1];Object(c.useEffect)((function(){M()}),[]),Object(c.useEffect)((function(){v(),g()}));var v=function(){switch(f){case"completed":x(l.filter((function(C){return!0===C.completed})));break;case"uncompleted":x(l.filter((function(C){return!1===C.completed})));break;default:x(l)}},g=function(){localStorage.setItem("todos",JSON.stringify(l))},M=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var C=JSON.parse(localStorage.getItem("todos"));d(C)}};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"To-Do App"})}),Object(i.jsx)(r,{inputText:e,setTodos:d,todos:l,setInputText:o,setStatus:p}),Object(i.jsx)(u,{todos:l,setTodos:d,filteredTodos:m}),Object(i.jsx)("div",{className:"push"})]}),Object(i.jsxs)("footer",{children:[Object(i.jsx)("p",{children:"\xa9 2021  |  To-Do App by : "}),Object(i.jsx)("a",{href:"http://balazsferencz.co.uk/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("svg",{width:"50",height:"50",viewBox:"0 0 161 113",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M40.7305 24.9609C40.9648 25.1953 41.2461 25.6406 41.5742 26.2969C41.9492 26.9531 41.9727 27.5391 41.6445 28.0547C41.5508 28.2891 41.0117 28.6875 40.0273 29.25C39.0898 29.8125 37.9414 30.4688 36.582 31.2188C35.2695 31.9219 33.8398 32.6719 32.293 33.4688C30.7461 34.2656 29.3164 35.0156 28.0039 35.7188C29.2695 36.4219 30.6055 37.1953 32.0117 38.0391C33.418 38.8359 34.707 39.6094 35.8789 40.3594C37.0977 41.0625 38.1289 41.6953 38.9727 42.2578C39.8164 42.8203 40.2852 43.1953 40.3789 43.3828C40.6602 43.9453 40.6133 44.5312 40.2383 45.1406C39.8633 45.75 39.5352 46.1719 39.2539 46.4062C39.1133 46.5469 38.6211 46.4766 37.7773 46.1953C36.9336 45.9141 35.9023 45.5391 34.6836 45.0703C33.4648 44.5547 32.1289 43.9922 30.6758 43.3828C29.2695 42.7266 27.9336 42.0938 26.668 41.4844C25.4023 40.875 24.3008 40.3125 23.3633 39.7969C22.4258 39.2812 21.8398 38.9062 21.6055 38.6719C21.2773 38.3906 21.043 37.9453 20.9023 37.3359C20.8086 36.7266 20.7617 36.0938 20.7617 35.4375C20.7617 34.7812 20.8086 34.1953 20.9023 33.6797C21.043 33.1172 21.1836 32.7891 21.3242 32.6953C21.6055 32.4609 22.2617 32.0859 23.293 31.5703C24.3242 31.0547 25.5195 30.4922 26.8789 29.8828C28.2852 29.2734 29.7617 28.6641 31.3086 28.0547C32.9023 27.3984 34.3555 26.8359 35.668 26.3672C37.0273 25.8516 38.1758 25.4766 39.1133 25.2422C40.0508 24.9609 40.5898 24.8672 40.7305 24.9609ZM60.1367 26.4375C61.2148 27 62.293 27.6094 63.3711 28.2656C64.4961 28.9219 65.5273 29.5547 66.4648 30.1641C67.4023 30.7266 68.1758 31.2656 68.7852 31.7812C69.4414 32.25 69.8633 32.625 70.0508 32.9062C70.2852 33.2812 70.4023 33.8672 70.4023 34.6641C70.4023 35.4141 70.332 36.2578 70.1914 37.1953C70.0977 38.0859 69.9336 38.9766 69.6992 39.8672C69.4648 40.7109 69.207 41.3906 68.9258 41.9062C68.5977 42.5625 67.8477 43.4062 66.6758 44.4375C65.5508 45.4688 64.2852 46.5 62.8789 47.5312C61.4727 48.5625 60.0898 49.4766 58.7305 50.2734C57.418 51.0703 56.4102 51.5625 55.707 51.75C55.1914 51.8906 54.418 52.0312 53.3867 52.1719C52.4023 52.3125 51.3711 52.4297 50.293 52.5234C49.2148 52.6172 48.2305 52.6875 47.3398 52.7344C46.4961 52.7344 45.9805 52.6875 45.793 52.5938C45.418 52.3594 45.0898 52.0078 44.8086 51.5391C44.5742 51.0703 44.457 50.4609 44.457 49.7109C44.5508 48.0703 44.7383 46.9453 45.0195 46.3359C45.1133 46.1953 45.2305 46.125 45.3711 46.125C45.5117 46.0781 45.7461 46.0547 46.0742 46.0547C46.4023 46.0547 46.8242 46.0547 47.3398 46.0547C47.8555 46.0547 48.5352 46.0312 49.3789 45.9844C49.1445 43.5938 48.9336 41.3203 48.7461 39.1641C48.5586 37.0078 48.3945 35.1094 48.2539 33.4688C48.0664 31.5469 47.9258 29.7422 47.832 28.0547C47.7383 26.4141 47.5977 24.5859 47.4102 22.5703C47.2695 20.8359 47.1055 18.8203 46.918 16.5234C46.7305 14.2266 46.5195 11.7422 46.2852 9.07031C45.8633 9.07031 45.3711 9.07031 44.8086 9.07031C44.2461 9.07031 43.6836 9.07031 43.1211 9.07031C42.6055 9.02344 42.1602 8.97656 41.7852 8.92969C41.3633 8.83594 41.1055 8.71875 41.0117 8.57812C40.8242 8.29688 40.6836 7.78125 40.5898 7.03125C40.4961 6.23437 40.4492 5.46094 40.4492 4.71094C40.4492 3.91406 40.5898 3.14062 40.8711 2.39062C41.1523 1.59375 41.4805 1.07813 41.8555 0.84375C41.9492 0.796875 42.3242 0.796875 42.9805 0.84375C43.6367 0.84375 44.4336 0.914062 45.3711 1.05469C46.3086 1.14844 47.3164 1.28906 48.3945 1.47656C49.5195 1.61719 50.5742 1.78125 51.5586 1.96875C52.543 2.10938 53.4102 2.25 54.1602 2.39062C54.9102 2.53125 55.4258 2.625 55.707 2.67188C56.1758 2.76563 57.0664 3.02344 58.3789 3.44531C59.7383 3.82031 61.1914 4.26562 62.7383 4.78125C64.2852 5.29688 65.7617 5.88281 67.168 6.53906C68.5742 7.14844 69.5586 7.75781 70.1211 8.36719C70.3555 8.60156 70.5664 9.25781 70.7539 10.3359C70.9883 11.4141 71.1523 12.6094 71.2461 13.9219C71.3867 15.2344 71.4336 16.4766 71.3867 17.6484C71.3867 18.7734 71.2695 19.5234 71.0352 19.8984C70.8477 20.1797 70.1914 20.6719 69.0664 21.375C67.9414 22.0781 66.6992 22.8047 65.3398 23.5547C63.793 24.3984 62.0586 25.3594 60.1367 26.4375ZM54.793 25.0312C55.4023 24.75 56.2227 24.1875 57.2539 23.3438C58.332 22.5 59.3867 21.5625 60.418 20.5312C61.4961 19.4531 62.4102 18.375 63.1602 17.2969C63.957 16.1719 64.3555 15.2109 64.3555 14.4141C64.3555 14.1797 64.0977 13.875 63.582 13.5C63.1133 13.125 62.457 12.75 61.6133 12.375C60.7695 12 59.7617 11.625 58.5898 11.25C57.4648 10.8281 56.2461 10.4531 54.9336 10.125L54.793 25.0312ZM54.7227 45.2109C56.0352 44.9297 57.2773 44.4844 58.4492 43.875C59.6211 43.2656 60.6523 42.6094 61.543 41.9062C62.4336 41.1562 63.1367 40.4062 63.6523 39.6562C64.168 38.9062 64.4258 38.2266 64.4258 37.6172C64.4258 37.0078 64.0273 36.3281 63.2305 35.5781C62.4805 34.8281 61.5664 34.0781 60.4883 33.3281C59.457 32.5781 58.4023 31.8984 57.3242 31.2891C56.2461 30.6797 55.4023 30.2344 54.793 29.9531L54.7227 45.2109ZM82.0039 32.0625C82.0039 32.6719 81.9805 33.6328 81.9336 34.9453C81.9336 36.2578 81.9102 37.7344 81.8633 39.375C81.8164 41.0156 81.7461 42.7266 81.6523 44.5078C81.6055 46.2422 81.5117 47.8359 81.3711 49.2891C81.2305 50.6953 81.0664 51.8672 80.8789 52.8047C80.7383 53.7422 80.5508 54.2109 80.3164 54.2109C79.6133 54.2109 78.9336 53.7188 78.2773 52.7344C77.668 51.7031 77.0352 50.6016 76.3789 49.4297C76.2383 49.1484 76.0742 48.3281 75.8867 46.9688C75.7461 45.5625 75.582 43.8047 75.3945 41.6953C75.2539 39.5859 75.1133 37.2422 74.9727 34.6641C74.832 32.0859 74.6914 29.4609 74.5508 26.7891C74.4102 24.1172 74.293 21.4922 74.1992 18.9141C74.1523 16.3359 74.1055 14.0156 74.0586 11.9531C74.0117 9.89062 74.0117 8.17969 74.0586 6.82031C74.1055 5.41406 74.1992 4.59375 74.3398 4.35938C74.5273 4.03125 75.1836 3.79688 76.3086 3.65625C77.4336 3.46875 78.793 3.375 80.3867 3.375C82.0273 3.375 83.7852 3.42187 85.6602 3.51562C87.5352 3.60938 89.2695 3.75 90.8633 3.9375C92.5039 4.07812 93.8633 4.24219 94.9414 4.42969C96.0664 4.61719 96.6992 4.78125 96.8398 4.92188C97.0273 5.10937 97.0508 5.625 96.9102 6.46875C96.8164 7.26563 96.6289 8.15625 96.3477 9.14062C96.1133 10.0781 95.8086 10.9688 95.4336 11.8125C95.1055 12.6562 94.8242 13.1953 94.5898 13.4297C94.3555 13.6641 93.2539 13.6406 91.2852 13.3594C89.3633 13.0781 86.2695 12.75 82.0039 12.375V24.1172C85.2852 24.3984 87.8398 24.6562 89.668 24.8906C91.543 25.125 92.5273 25.2891 92.6211 25.3828C92.8086 25.5703 92.8789 25.9453 92.832 26.5078C92.7852 27.0703 92.668 27.6797 92.4805 28.3359C92.293 28.9453 92.0586 29.5312 91.7773 30.0938C91.4961 30.6094 91.2148 30.9609 90.9336 31.1484C90.793 31.2422 89.9492 31.3828 88.4023 31.5703C86.9023 31.7578 84.7695 31.9219 82.0039 32.0625ZM119.129 2.39062C119.129 2.57812 118.848 3.42187 118.285 4.92188C117.77 6.42188 117.043 8.34375 116.105 10.6875C115.215 13.0313 114.16 15.6797 112.941 18.6328C111.77 21.5391 110.551 24.5156 109.285 27.5625C108.02 30.6094 106.754 33.5859 105.488 36.4922C104.27 39.3984 103.145 42.0234 102.113 44.3672C101.082 46.7109 100.215 48.6562 99.5117 50.2031C98.8086 51.7031 98.3398 52.5469 98.1055 52.7344C97.3555 53.4375 96.6055 53.8594 95.8555 54C95.1055 54.0938 94.543 54.0938 94.168 54C94.0273 53.9531 94.1445 53.2734 94.5195 51.9609C94.8945 50.6016 95.4336 48.8203 96.1367 46.6172C96.8398 44.3672 97.6602 41.8359 98.5977 39.0234C99.582 36.1641 100.59 33.2578 101.621 30.3047C102.652 27.3047 103.684 24.3516 104.715 21.4453C105.793 18.4922 106.777 15.8438 107.668 13.5C108.559 11.1562 109.309 9.21094 109.918 7.66406C110.527 6.07031 110.949 5.10937 111.184 4.78125C111.605 4.125 112.238 3.53906 113.082 3.02344C113.973 2.50781 114.863 2.13281 115.754 1.89844C116.645 1.61719 117.418 1.52344 118.074 1.61719C118.777 1.66406 119.129 1.92188 119.129 2.39062ZM119.27 24.9609C119.41 24.8672 119.926 24.9609 120.816 25.2422C121.754 25.4766 122.902 25.8516 124.262 26.3672C125.621 26.8359 127.074 27.3984 128.621 28.0547C130.168 28.6641 131.645 29.2734 133.051 29.8828C134.457 30.4922 135.652 31.0547 136.637 31.5703C137.668 32.0859 138.324 32.4609 138.605 32.6953C138.746 32.7891 138.863 33.1172 138.957 33.6797C139.051 34.1953 139.098 34.7812 139.098 35.4375C139.145 36.0938 139.098 36.7266 138.957 37.3359C138.863 37.9453 138.676 38.3906 138.395 38.6719C138.113 38.9062 137.504 39.2812 136.566 39.7969C135.629 40.3125 134.527 40.875 133.262 41.4844C131.996 42.0938 130.637 42.7266 129.184 43.3828C127.777 43.9922 126.465 44.5547 125.246 45.0703C124.027 45.5391 122.996 45.9141 122.152 46.1953C121.309 46.4766 120.816 46.5469 120.676 46.4062C120.395 46.1719 120.066 45.75 119.691 45.1406C119.363 44.5312 119.34 43.9453 119.621 43.3828C119.715 43.1953 120.184 42.8203 121.027 42.2578C121.871 41.6953 122.879 41.0625 124.051 40.3594C125.27 39.6094 126.582 38.8359 127.988 38.0391C129.395 37.1953 130.73 36.4219 131.996 35.7188C130.684 35.0156 129.254 34.2656 127.707 33.4688C126.16 32.6719 124.707 31.9219 123.348 31.2188C121.988 30.4688 120.816 29.8125 119.832 29.25C118.895 28.6875 118.379 28.2891 118.285 28.0547C117.957 27.5391 117.957 26.9531 118.285 26.2969C118.66 25.6406 118.988 25.1953 119.27 24.9609ZM9.82812 51.7578C10.7656 51.9453 12.0547 52.5078 13.6953 53.4453C15.3359 54.3359 16.9766 55.3672 18.6172 56.5391C20.3047 57.6641 21.7812 58.7891 23.0469 59.9141C24.3125 60.9922 25.0625 61.7656 25.2969 62.2344C25.4844 62.7031 25.5547 63.5703 25.5078 64.8359C25.4609 66.1016 25.3203 67.6484 25.0859 69.4766C24.8516 71.2578 24.5469 73.2266 24.1719 75.3828C23.7969 77.5391 23.375 79.7188 22.9062 81.9219C22.4375 84.0781 21.9219 86.1875 21.3594 88.25C20.8438 90.2656 20.3047 92.0469 19.7422 93.5938C19.5078 94.3438 18.9922 95.1641 18.1953 96.0547C17.3984 96.9453 16.4609 97.8359 15.3828 98.7266C14.3047 99.5703 13.1562 100.367 11.9375 101.117C10.7656 101.867 9.64062 102.5 8.5625 103.016C7.53125 103.531 6.59375 103.883 5.75 104.07C4.95312 104.258 4.41406 104.211 4.13281 103.93C3.85156 103.648 3.54688 102.758 3.21875 101.258C2.9375 99.7109 2.65625 97.7891 2.375 95.4922C2.09375 93.1484 1.83594 90.5469 1.60156 87.6875C1.36719 84.7812 1.15625 81.8281 0.96875 78.8281C0.78125 75.8281 0.617188 72.8984 0.476562 70.0391C0.382812 67.1328 0.3125 64.5312 0.265625 62.2344C0.265625 59.8906 0.3125 57.9453 0.40625 56.3984C0.5 54.8047 0.664062 53.8438 0.898438 53.5156C1.08594 53.2812 1.55469 53.0469 2.30469 52.8125C3.10156 52.5781 3.96875 52.3672 4.90625 52.1797C5.89062 51.9922 6.85156 51.8516 7.78906 51.7578C8.72656 51.6641 9.40625 51.6641 9.82812 51.7578ZM9.40625 60.6875C9.07812 60.9219 8.84375 61.6484 8.70312 62.8672C8.5625 64.0391 8.44531 65.4688 8.35156 67.1562C8.30469 68.7969 8.28125 70.5547 8.28125 72.4297C8.28125 74.3047 8.25781 76.0156 8.21094 77.5625C8.11719 81.5938 8.07031 84.7812 8.07031 87.125C8.11719 89.4219 8.16406 91.1562 8.21094 92.3281C8.30469 93.4531 8.42188 94.1797 8.5625 94.5078C8.70312 94.7891 8.89062 94.9297 9.125 94.9297C9.3125 94.9297 9.61719 94.7891 10.0391 94.5078C10.5078 94.2266 11 93.875 11.5156 93.4531C12.0312 93.0312 12.5234 92.5859 12.9922 92.1172C13.4609 91.6016 13.7891 91.1562 13.9766 90.7812C14.1641 90.4062 14.3984 89.6797 14.6797 88.6016C14.9609 87.4766 15.2422 86.1875 15.5234 84.7344C15.8047 83.2344 16.0859 81.6641 16.3672 80.0234C16.6484 78.3359 16.8828 76.7422 17.0703 75.2422C17.3047 73.6953 17.4688 72.3359 17.5625 71.1641C17.7031 69.9453 17.7734 69.0781 17.7734 68.5625C17.7266 67.5781 17.3281 66.5703 16.5781 65.5391C15.8281 64.5078 14.9609 63.5938 13.9766 62.7969C13.0391 62 12.1016 61.3906 11.1641 60.9688C10.2734 60.5469 9.6875 60.4531 9.40625 60.6875ZM33.875 83.6797C34.625 83.3984 35.4688 83.0938 36.4062 82.7656C37.3906 82.3906 38.3281 82.0625 39.2188 81.7812C40.1094 81.4531 40.9062 81.1719 41.6094 80.9375C42.3125 80.7031 42.8281 80.5156 43.1562 80.375C43.1094 79.8594 43.0391 79.2734 42.9453 78.6172C42.8984 77.9141 42.8281 77.2578 42.7344 76.6484C42.6406 75.9922 42.5234 75.4297 42.3828 74.9609C42.2422 74.4922 42.1016 74.2109 41.9609 74.1172C41.5859 73.9766 40.9531 73.8594 40.0625 73.7656C39.2188 73.625 38.3281 73.6484 37.3906 73.8359C36.5 74.0234 35.6797 74.375 34.9297 74.8906C34.1797 75.4062 33.7578 76.2266 33.6641 77.3516C33.5703 78.1016 33.5469 79.0391 33.5938 80.1641C33.6406 81.2891 33.7344 82.4609 33.875 83.6797ZM49.1328 84.8047C49.0859 84.8984 48.5234 85.0859 47.4453 85.3672C46.3672 85.6484 45.0781 85.9531 43.5781 86.2812C42.0781 86.5625 40.4844 86.8672 38.7969 87.1953C37.1094 87.4766 35.6562 87.7109 34.4375 87.8984C34.6719 89.7734 34.9531 91.4609 35.2812 92.9609C35.6094 94.4141 35.8906 95.3281 36.125 95.7031C36.3594 96.0312 36.6641 96.3359 37.0391 96.6172C37.3672 96.8516 37.7656 97.0859 38.2344 97.3203C38.75 97.5078 39.3594 97.6484 40.0625 97.7422C40.5781 97.8828 41.0703 97.6953 41.5391 97.1797C41.9141 96.7109 42.2422 95.8906 42.5234 94.7188C42.8516 93.5469 43.0156 91.6953 43.0156 89.1641C44.4688 88.9297 45.5938 88.7891 46.3906 88.7422C47.2344 88.6953 47.8438 88.6953 48.2188 88.7422C48.6875 88.7891 48.9688 88.8594 49.0625 88.9531C49.1094 89.0938 49.1094 89.4453 49.0625 90.0078C49.0156 90.5703 48.8984 91.2734 48.7109 92.1172C48.5703 92.9141 48.3828 93.8047 48.1484 94.7891C47.9609 95.7266 47.7266 96.6406 47.4453 97.5312C47.1641 98.375 46.8594 99.1484 46.5312 99.8516C46.2031 100.508 45.8516 100.977 45.4766 101.258C44.3516 102.102 42.9453 102.523 41.2578 102.523C39.5703 102.477 37.9062 102.242 36.2656 101.82C34.625 101.352 33.1484 100.812 31.8359 100.203C30.5234 99.5469 29.7031 99.0078 29.375 98.5859C29.1406 98.3047 28.9297 97.6016 28.7422 96.4766C28.5547 95.3047 28.3906 93.8984 28.25 92.2578C28.1562 90.6172 28.0859 88.8125 28.0391 86.8438C27.9922 84.875 28.0156 82.9531 28.1094 81.0781C28.25 79.2031 28.4375 77.4688 28.6719 75.875C28.9531 74.2812 29.3281 72.9922 29.7969 72.0078C30.5 70.6016 31.6484 69.4531 33.2422 68.5625C34.8359 67.6719 36.5234 67.0625 38.3047 66.7344C40.0859 66.4062 41.7734 66.3594 43.3672 66.5938C45.0078 66.8281 46.2266 67.3438 47.0234 68.1406C47.4922 68.6094 47.9141 69.5469 48.2891 70.9531C48.6641 72.3125 48.8984 73.9766 48.9922 75.9453C48.9922 76.1328 49.0156 76.6719 49.0625 77.5625C49.1094 78.4531 49.1328 79.4141 49.1328 80.4453C49.1797 81.4297 49.2031 82.3672 49.2031 83.2578C49.2031 84.1484 49.1797 84.6641 49.1328 84.8047ZM74.0938 69.4062C74.1406 69.9219 74.0469 70.7188 73.8125 71.7969C73.625 72.875 73.3203 73.9531 72.8984 75.0312C72.5234 76.1094 72.0078 77.0469 71.3516 77.8438C70.7422 78.6406 70.0391 79.0391 69.2422 79.0391C68.6797 79.0391 68.2109 78.5938 67.8359 77.7031C67.5078 76.8125 67.25 75.7812 67.0625 74.6094C66.9219 73.3906 66.8047 72.1953 66.7109 71.0234C66.6172 69.8516 66.5234 69.0312 66.4297 68.5625C66.2891 68.3281 66.0078 68.1172 65.5859 67.9297C65.2109 67.6953 64.8359 67.5781 64.4609 67.5781C64.0859 67.5781 63.6641 67.8828 63.1953 68.4922C62.7266 69.1016 62.2578 69.8047 61.7891 70.6016C61.3672 71.3984 60.9922 72.1953 60.6641 72.9922C60.3828 73.7891 60.2656 74.375 60.3125 74.75C60.3125 75.0312 60.6172 75.5234 61.2266 76.2266C61.8359 76.9297 62.5859 77.7734 63.4766 78.7578C64.4141 79.6953 65.3984 80.7266 66.4297 81.8516C67.5078 82.9297 68.4922 84.0312 69.3828 85.1562C70.2734 86.2344 71.0234 87.2656 71.6328 88.25C72.2891 89.2344 72.6406 90.0781 72.6875 90.7812C72.7344 91.625 72.5 92.7031 71.9844 94.0156C71.5156 95.3281 70.9062 96.5938 70.1562 97.8125C69.4062 99.0312 68.6094 100.086 67.7656 100.977C66.9219 101.867 66.1719 102.336 65.5156 102.383C64.8594 102.43 63.8984 102.078 62.6328 101.328C61.4141 100.531 60.1719 99.6172 58.9062 98.5859C57.6875 97.5078 56.5859 96.4531 55.6016 95.4219C54.6641 94.3906 54.125 93.6406 53.9844 93.1719C53.8438 92.75 53.75 92.1875 53.7031 91.4844C53.7031 90.7812 53.7266 90.0781 53.7734 89.375C53.8672 88.6719 54.0078 88.0859 54.1953 87.6172C54.3828 87.1016 54.6172 86.8438 54.8984 86.8438C55.1797 86.8438 55.7422 87.3359 56.5859 88.3203C57.4297 89.2578 58.3438 90.3359 59.3281 91.5547C60.3125 92.7266 61.2734 93.8047 62.2109 94.7891C63.1484 95.7266 63.8281 96.1953 64.25 96.1953C64.4844 96.1953 64.7422 96.0312 65.0234 95.7031C65.3047 95.3281 65.5625 94.9062 65.7969 94.4375C66.0312 93.9688 66.2188 93.5 66.3594 93.0312C66.5469 92.5156 66.6406 92.1172 66.6406 91.8359C66.5938 91.4141 66.2188 90.8047 65.5156 90.0078C64.8125 89.2109 63.9219 88.3203 62.8438 87.3359C61.7656 86.3516 60.5938 85.3203 59.3281 84.2422C58.0625 83.1172 56.8906 82.0625 55.8125 81.0781C54.7344 80.0938 53.8438 79.2031 53.1406 78.4062C52.4375 77.6094 52.0625 77 52.0156 76.5781C51.9688 76.1562 52.1094 75.5 52.4375 74.6094C52.7656 73.6719 53.1875 72.6641 53.7031 71.5859C54.2188 70.4609 54.8047 69.3125 55.4609 68.1406C56.1641 66.9688 56.8672 65.8906 57.5703 64.9062C58.2734 63.9219 58.9531 63.125 59.6094 62.5156C60.3125 61.8594 60.9219 61.5312 61.4375 61.5312C62.4688 61.5312 63.6875 61.8125 65.0938 62.375C66.5469 62.9375 67.9297 63.6406 69.2422 64.4844C70.5547 65.2812 71.6797 66.125 72.6172 67.0156C73.5547 67.9062 74.0469 68.7031 74.0938 69.4062ZM84.0078 73.7656C84.1016 74 84.1484 74.75 84.1484 76.0156C84.1953 77.2344 84.1953 78.7344 84.1484 80.5156C84.1484 82.25 84.1016 84.125 84.0078 86.1406C83.9141 88.1094 83.7969 89.9844 83.6562 91.7656C83.5625 93.5 83.4453 95 83.3047 96.2656C83.1641 97.4844 83.0234 98.2109 82.8828 98.4453C82.4609 99.1016 81.8281 99.5234 80.9844 99.7109C80.1406 99.8516 79.5312 99.875 79.1562 99.7812C78.9688 99.7812 78.7578 99.2422 78.5234 98.1641C78.3359 97.0859 78.1484 95.7266 77.9609 94.0859C77.7734 92.4453 77.6094 90.6641 77.4688 88.7422C77.3281 86.8203 77.2109 84.9922 77.1172 83.2578C77.0234 81.4766 76.9766 79.9297 76.9766 78.6172C76.9766 77.3047 77.0234 76.4609 77.1172 76.0859C77.2578 75.4766 77.6562 74.9375 78.3125 74.4688C79.0156 74 79.7422 73.6484 80.4922 73.4141C81.2891 73.1797 82.0156 73.0859 82.6719 73.1328C83.375 73.1328 83.8203 73.3438 84.0078 73.7656ZM84.3594 62.375C84.5469 62.75 84.6172 63.2656 84.5703 63.9219C84.5703 64.5781 84.5 65.2578 84.3594 65.9609C84.2188 66.6641 84.0312 67.3438 83.7969 68C83.5625 68.6562 83.3281 69.1719 83.0938 69.5469C82.625 70.2031 81.9219 70.625 80.9844 70.8125C80.0938 70.9531 79.4375 70.9766 79.0156 70.8828C78.6875 70.8359 78.3594 70.625 78.0312 70.25C77.7031 69.8281 77.4219 69.3359 77.1875 68.7734C76.9531 68.1641 76.7891 67.5078 76.6953 66.8047C76.6016 66.1016 76.625 65.4453 76.7656 64.8359C76.9062 64.2266 77.3516 63.6875 78.1016 63.2188C78.8516 62.7031 79.6484 62.3281 80.4922 62.0938C81.3359 61.8125 82.1328 61.6953 82.8828 61.7422C83.6328 61.7422 84.125 61.9531 84.3594 62.375ZM107.211 106.25C107.117 106.531 106.836 106.977 106.367 107.586C105.898 108.195 105.336 108.828 104.68 109.484C104.023 110.141 103.367 110.727 102.711 111.242C102.055 111.758 101.516 112.086 101.094 112.227C100.156 112.508 99.1484 112.438 98.0703 112.016C97.0391 111.641 96.0312 111.125 95.0469 110.469C94.1094 109.812 93.2891 109.133 92.5859 108.43C91.8828 107.773 91.4375 107.281 91.25 106.953C91.1094 106.625 90.9688 106.18 90.8281 105.617C90.7344 105.055 90.6641 104.492 90.6172 103.93C90.5703 103.367 90.5703 102.898 90.6172 102.523C90.7109 102.102 90.875 101.891 91.1094 101.891C91.3438 101.891 91.8828 102.125 92.7266 102.594C93.6172 103.016 94.5312 103.461 95.4688 103.93C96.4531 104.398 97.3672 104.773 98.2109 105.055C99.0547 105.336 99.5703 105.289 99.7578 104.914C99.9453 104.586 100.109 103.672 100.25 102.172C100.438 100.625 100.648 98.75 100.883 96.5469C100.789 96.5469 100.695 96.5703 100.602 96.6172C100.555 96.6172 100.484 96.6172 100.391 96.6172C99.9688 96.7578 99.3828 96.8281 98.6328 96.8281C97.8828 96.8281 97.0859 96.7812 96.2422 96.6875C95.4453 96.5938 94.6484 96.4297 93.8516 96.1953C93.1016 95.9141 92.4922 95.5625 92.0234 95.1406C91.8359 94.9531 91.625 94.6719 91.3906 94.2969C91.2031 93.875 91.0625 93.3359 90.9688 92.6797C90.8281 92.3984 90.5938 91.6016 90.2656 90.2891C89.9375 88.9297 89.6094 87.4062 89.2812 85.7188C88.9531 83.9844 88.6484 82.25 88.3672 80.5156C88.1328 78.7812 88.0625 77.3984 88.1562 76.3672C88.2031 75.3359 88.3906 74.2812 88.7188 73.2031C89.0469 72.0781 89.4219 71.0234 89.8438 70.0391C90.3125 69.0547 90.8047 68.2109 91.3203 67.5078C91.8359 66.7578 92.3516 66.2422 92.8672 65.9609C93.9922 65.3984 95.3984 65.2812 97.0859 65.6094C98.7734 65.9375 100.578 66.5703 102.5 67.5078C102.547 67.0391 102.758 66.5234 103.133 65.9609C103.508 65.3984 103.93 64.9062 104.398 64.4844C104.914 64.0156 105.43 63.6875 105.945 63.5C106.461 63.2656 106.859 63.2422 107.141 63.4297C107.281 63.5234 107.398 64.1797 107.492 65.3984C107.586 66.5703 107.656 68.1172 107.703 70.0391C107.797 71.9141 107.844 74.0703 107.844 76.5078C107.891 78.8984 107.891 81.3828 107.844 83.9609C107.844 86.4922 107.82 89 107.773 91.4844C107.773 93.9688 107.727 96.2422 107.633 98.3047C107.586 100.367 107.516 102.102 107.422 103.508C107.375 104.914 107.305 105.828 107.211 106.25ZM102.289 72.8516C102.008 72.6641 101.68 72.4766 101.305 72.2891C100.977 72.1016 100.602 71.9141 100.18 71.7266C99.7578 71.5391 99.2891 71.375 98.7734 71.2344C98.5391 71.1406 98.2109 71.2344 97.7891 71.5156C97.4141 71.7969 97.0156 72.1953 96.5938 72.7109C96.2188 73.2266 95.8906 73.8594 95.6094 74.6094C95.3281 75.3125 95.1875 76.0625 95.1875 76.8594C95.1875 76.9531 95.2109 77.3984 95.2578 78.1953C95.3047 78.9922 95.375 79.9531 95.4688 81.0781C95.5625 82.2031 95.6562 83.4219 95.75 84.7344C95.8438 86.0469 95.9375 87.2656 96.0312 88.3906C96.1719 89.5156 96.2891 90.4766 96.3828 91.2734C96.4766 92.0234 96.5469 92.4219 96.5938 92.4688C96.7812 92.6562 97.0391 92.75 97.3672 92.75C97.7422 92.75 98.0938 92.7031 98.4219 92.6094C98.7969 92.5156 99.125 92.3984 99.4062 92.2578C99.6875 92.1172 99.8984 92 100.039 91.9062C100.648 91.4844 101.023 90.6641 101.164 89.4453C101.258 89.3516 101.305 89.0938 101.305 88.6719C101.445 85.5781 101.586 82.7891 101.727 80.3047C101.867 77.7734 102.055 75.2891 102.289 72.8516ZM132.102 74.5391C132.102 75.2891 132.008 76.3672 131.82 77.7734C131.68 79.1797 131.469 80.7266 131.188 82.4141C130.906 84.0547 130.602 85.7656 130.273 87.5469C129.992 89.2812 129.688 90.875 129.359 92.3281C129.078 93.7812 128.82 95 128.586 95.9844C128.398 96.9688 128.281 97.5078 128.234 97.6016C128.141 97.7422 127.883 97.8359 127.461 97.8828C127.086 97.8828 126.641 97.8359 126.125 97.7422C125.656 97.6484 125.211 97.5078 124.789 97.3203C124.414 97.1328 124.18 96.8984 124.086 96.6172C124.039 96.4297 124.016 95.7734 124.016 94.6484C124.062 93.5234 124.109 92.1875 124.156 90.6406C124.25 89.0469 124.344 87.3594 124.438 85.5781C124.531 83.75 124.625 82.0625 124.719 80.5156C124.859 78.9219 124.953 77.5625 125 76.4375C125.094 75.3125 125.141 74.6328 125.141 74.3984C125.141 73.5547 125.047 72.7578 124.859 72.0078C124.719 71.2109 124.531 70.5312 124.297 69.9688C124.062 69.4062 123.781 68.9844 123.453 68.7031C123.172 68.375 122.914 68.2578 122.68 68.3516C122.07 68.4453 121.555 68.6094 121.133 68.8438C120.711 69.0312 120.359 69.2422 120.078 69.4766C119.75 69.7578 119.492 70.0859 119.305 70.4609C119.258 70.5547 119.164 70.8359 119.023 71.3047C118.93 71.7734 118.883 72.3125 118.883 72.9219C118.883 73.1094 118.883 73.7891 118.883 74.9609C118.883 76.0859 118.859 77.4453 118.812 79.0391C118.812 80.6328 118.789 82.3672 118.742 84.2422C118.742 86.0703 118.719 87.7812 118.672 89.375C118.672 90.9219 118.648 92.2578 118.602 93.3828C118.555 94.5078 118.508 95.1406 118.461 95.2812C118.367 95.5625 118.133 95.9609 117.758 96.4766C117.383 96.9453 116.961 97.3906 116.492 97.8125C116.023 98.2344 115.578 98.5625 115.156 98.7969C114.734 98.9844 114.453 98.9375 114.312 98.6562C114.172 98.5156 114.031 97.8359 113.891 96.6172C113.75 95.3516 113.586 93.8281 113.398 92.0469C113.258 90.2188 113.094 88.25 112.906 86.1406C112.719 83.9844 112.555 81.9219 112.414 79.9531C112.273 77.9844 112.156 76.2031 112.062 74.6094C111.969 73.0156 111.898 71.8672 111.852 71.1641C111.805 70.1797 111.758 69.0781 111.711 67.8594C111.664 66.5938 111.617 65.4219 111.57 64.3438C111.57 63.2188 111.57 62.2578 111.57 61.4609C111.617 60.6172 111.711 60.1016 111.852 59.9141C111.945 59.7266 112.25 59.6797 112.766 59.7734C113.328 59.8672 113.914 60.0547 114.523 60.3359C115.18 60.5703 115.789 60.875 116.352 61.25C116.914 61.5781 117.289 61.9062 117.477 62.2344C117.57 62.5156 117.688 62.8438 117.828 63.2188C117.969 63.5469 118.086 64.1094 118.18 64.9062C118.977 64.4375 119.844 64.0156 120.781 63.6406C121.719 63.2188 122.633 62.9141 123.523 62.7266C124.461 62.4922 125.352 62.4219 126.195 62.5156C127.039 62.5625 127.789 62.7969 128.445 63.2188C128.867 63.5469 129.289 64.1094 129.711 64.9062C130.18 65.7031 130.578 66.6406 130.906 67.7188C131.281 68.7969 131.562 69.9453 131.75 71.1641C131.984 72.3359 132.102 73.4609 132.102 74.5391ZM160.719 61.4609C160.766 62.1641 160.672 63.2188 160.438 64.625C160.25 66.0312 159.922 67.4375 159.453 68.8438C158.984 70.25 158.375 71.4922 157.625 72.5703C156.922 73.6016 156.102 74.1172 155.164 74.1172C154.695 74.1172 154.297 73.8359 153.969 73.2734C153.641 72.7109 153.359 71.9844 153.125 71.0938C152.891 70.2031 152.703 69.2188 152.562 68.1406C152.422 67.0156 152.281 65.9375 152.141 64.9062C152.047 63.875 151.953 62.9375 151.859 62.0938C151.812 61.2031 151.766 60.5469 151.719 60.125C151.531 59.8438 151.18 59.5625 150.664 59.2812C150.195 58.9531 149.773 58.7891 149.398 58.7891C148.977 58.7891 148.461 59.1875 147.852 59.9844C147.289 60.7812 146.75 61.7188 146.234 62.7969C145.719 63.875 145.297 64.9531 144.969 66.0312C144.641 67.0625 144.5 67.8594 144.547 68.4219C144.547 68.7969 144.898 69.4531 145.602 70.3906C146.352 71.3281 147.266 72.4297 148.344 73.6953C149.422 74.9609 150.594 76.3438 151.859 77.8438C153.125 79.2969 154.297 80.75 155.375 82.2031C156.453 83.6562 157.367 85.0391 158.117 86.3516C158.867 87.6641 159.266 88.7891 159.312 89.7266C159.406 90.8516 159.148 92.3047 158.539 94.0859C157.977 95.8203 157.25 97.5078 156.359 99.1484C155.469 100.789 154.508 102.219 153.477 103.438C152.492 104.609 151.602 105.219 150.805 105.266C150.289 105.312 149.609 105.078 148.766 104.562C147.922 104.094 147.008 103.461 146.023 102.664C145.039 101.867 144.031 101 143 100.062C142.016 99.0781 141.078 98.1172 140.188 97.1797C139.344 96.2422 138.617 95.3984 138.008 94.6484C137.445 93.8516 137.117 93.2656 137.023 92.8906C136.836 92.3281 136.719 91.5781 136.672 90.6406C136.672 89.6562 136.719 88.7188 136.812 87.8281C136.953 86.8906 137.117 86.0938 137.305 85.4375C137.539 84.7344 137.82 84.3828 138.148 84.3828C138.383 84.3828 138.758 84.6875 139.273 85.2969C139.836 85.9062 140.469 86.6797 141.172 87.6172C141.875 88.5547 142.625 89.5859 143.422 90.7109C144.266 91.7891 145.062 92.7969 145.812 93.7344C146.562 94.6719 147.242 95.4688 147.852 96.125C148.461 96.7344 148.953 97.0156 149.328 96.9688C149.609 96.9688 149.914 96.7578 150.242 96.3359C150.57 95.8672 150.875 95.3281 151.156 94.7188C151.438 94.0625 151.672 93.4062 151.859 92.75C152.047 92.0938 152.141 91.5781 152.141 91.2031C152.094 90.6406 151.625 89.8438 150.734 88.8125C149.891 87.7344 148.812 86.5391 147.5 85.2266C146.234 83.8672 144.852 82.4609 143.352 81.0078C141.898 79.5547 140.516 78.1719 139.203 76.8594C137.938 75.5 136.859 74.2812 135.969 73.2031C135.125 72.125 134.68 71.3047 134.633 70.7422C134.586 70.1797 134.75 69.3125 135.125 68.1406C135.5 66.9219 135.992 65.5625 136.602 64.0625C137.258 62.5625 137.984 61.0391 138.781 59.4922C139.578 57.9453 140.398 56.5156 141.242 55.2031C142.086 53.8906 142.906 52.8359 143.703 52.0391C144.5 51.1953 145.203 50.7734 145.812 50.7734C146.609 50.7734 147.523 50.9609 148.555 51.3359C149.586 51.6641 150.641 52.1328 151.719 52.7422C152.844 53.3047 153.922 53.9609 154.953 54.7109C156.031 55.4609 156.992 56.2344 157.836 57.0312C158.68 57.7812 159.359 58.5547 159.875 59.3516C160.391 60.1016 160.672 60.8047 160.719 61.4609Z",fill:"white"})})})]})]})},f=function(C){C&&C instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;e(C),c(C),o(C),s(C),n(C)}))};n.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.f6c3e5db.chunk.js.map