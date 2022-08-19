// Так как промис является центральной сущностью в работе с асинхронным кодом в современном JS,
// предлагается развить дальше то, что смотрели на лекции и написать собственную простую реализацию,
// которая будет соответствовать следующим требованиям:
//
//   * Промис создается конструктором в состоянии pending +
//   *  Промис может быть переведен в состояние fulfilled или rejected необратимо, +
//      т.е. промис который поменял состояние один раз, не может менять его дальше
//   * Можно добавить новые обработчики в уже исполненный промис
//   * Можно создать уже выполненный промис с помощью CustomPromise.resolve/reject
//
// Важный нюанс: Промис должен работать асинхронно, +
// для реализации этого можно использовать setTimeout c нулевой задержкой
//
// При любых сомнениях можно смотреть как работает настоящий промис, поведение внешне не должно отличаться
module.exports = Promise;

function Promise(funct) {
  let theStateOfThePromise = "pending"
  let deferred = null
  let value = null

  this.resolve = (newValue) => {
    // if (theStateOfThePromise === "fulfilled"){
    //   return
    // }
    theStateOfThePromise = "fulfilled"
    value = newValue

    if (deferred) {
      handle(deferred);
    }
  }

  this.reject = (reason) => {
    // if (theStateOfThePromise === "fulfilled"){
    //   return
    // }
    theStateOfThePromise =  "rejected"
    value = reason

    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (theStateOfThePromise === 'pending') {
      deferred = handler;
      return;
    }

    setTimeout(function(){
      let handlerCallback;

      if (theStateOfThePromise === "fulfilled") {  handlerCallback = handler.onResolved
      }
      else if (theStateOfThePromise ===  "rejected") { handlerCallback = handler.onRejected
      }

      if (handlerCallback) {
        let returnValueOrReason;

        try { returnValueOrReason = handlerCallback(value);
        }
        catch (err) {
          handler.reject(err);
          return;
        }

        if (theStateOfThePromise === "fulfilled") { handler.resolve(returnValueOrReason);
        }
        else if (theStateOfThePromise ===  "rejected") { handler.reject(returnValueOrReason);
        }
      }
      else {
          theStateOfThePromise === "fulfilled" ? handler.resolve(value) : handler.reject(value);
          return
        }
    }, 1)
  }

  this.then = function(onResolved, onRejected) {
    return new Promise(function(resolve, reject){
      handle({
        onResolved: onResolved,
        onRejected: onRejected,
        reject: reject,
        resolve: resolve
      })
    })
  }
}

function myFunction() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (Math.random() > .5) {
              (resolve("Успех")
            } else {
              reject("Ошибка")
            }
        }, 100);
    });
}
