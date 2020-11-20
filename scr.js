const minEvDelay = 0;
const maxEvDelay = 4000;

// function startDay (toStart, nextTask)
// {
//     console.log('I start my day with: ');
//     setTimeout(() => {
//         if (toStart) {
//             nextTask(null, 'Waking up');
//             return;
//         }
//
//         nextTask('Failed to wake up', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
//
// startDay(true, (error, data) => {
//     if (error)
//     {
//         console.log(error);
//         return;
//     }
//
//     console.log(data);
//
//     brushTeeth(true, (error, data) => {
//         if (error)
//         {
//             console.log(error);
//             return;
//         }
//         console.log(data);
//
//         attendLectures(true, (error, data) => {
//             if (error)
//             {
//                 console.log(error);
//                 return;
//             }
//
//             console.log(data);
//             goForAwalk(true, (error, data) => {
//                 if (error) {
//                     console.log(error);
//                     return;
//                 }
//                 console.log(data);
//
//                 haveDinner(true, (error, data) => {
//                     if (error) {
//                         console.log(error);
//                         return;
//                     }
//                     console.log(data);
//
//                     doCoding(true, (error, data) => {
//                         if (error) {
//                             console.log(error);
//                             return;
//                         }
//                         console.log(data);
//
//                         goToBed(true, (error, data) => {
//                             if (error) {
//                                 console.log(error);
//                                 return;
//                             }
//                             console.log(data);
//                             console.log('And thats all folks!');
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
//
// function brushTeeth (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Brushing Teeth');
//             return;
//         }
//         nextTask('Failed to brush teeth', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
//
// function attendLectures (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Attending lectures');
//             return;
//         }
//         nextTask('Failed to brush teeth', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
// function goForAwalk (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Going for a walk');
//             return;
//         }
//         nextTask('Failed to go for a walk', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
// function haveDinner (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Having dinner');
//             return;
//         }
//         nextTask('Failed to eat', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
// function doCoding (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Coding');
//             return;
//         }
//         nextTask('Failed to code', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
// function goToBed (toDo, nextTask)
// {
//     setTimeout(() => {
//         if (toDo) {
//             nextTask(null, 'Goind to bed');
//             return;
//         }
//         nextTask('Failed to go to bed', null);
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
// }
// function startDay (toStart)
// {
//     return new Promise((resolve, reject) => {
//         console.log('I start my day with: ');
//         setTimeout(() => {
//             if (toStart) {
//                 resolve( 'Waking up');
//             }
//
//             reject('Failed to wake up');
//         }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
//
// startDay(true)
//     .then(value => {
//     console.log(value);
//     return brushTeeth(true);
//     })
//     .then(value => {
//     console.log(value);
//     return attendLectures(true);
//     })
//     .then(value => {
//     console.log(value);
//     return goForAwalk(true);
//     })
//     .then(value => {
//     console.log(value);
//     return haveDinner(true);
//     })
//     .then(value => {
//     console.log(value);
//     return doCoding(true);
//     })
//     .then(value => {
//     console.log(value);
//     return goToBed(true);
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
//     .finally (() => {
//         console.log('And thats all folks!');
//     })
//
//
// function brushTeeth (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Brushing Teeth');
//         }
//         reject('Failed to brush teeth');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
//
// function attendLectures (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Attending lectures');
//         }
//         reject('Failed to brush teeth');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
// function goForAwalk (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Going for a walk');
//         }
//         reject('Failed to go for a walk');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
// function haveDinner (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Having dinner');
//         }
//         reject('Failed to eat');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
// function doCoding (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Coding');
//         }
//         reject('Failed to code');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }
// function goToBed (toDo, nextTask)
// {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (toDo) {
//             resolve('Goind to bed');
//         }
//         reject('Failed to go to bed');
//     }, minEvDelay + Math.random() * (maxEvDelay - minEvDelay));
//     });
// }