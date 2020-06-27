import { Observable } from 'https://raw.githubusercontent.com/DenoBRComunitty/rxjs/master/mod.ts';

const observable = new Observable((subscriber: any) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('before subscribe');
observable.subscribe({
  next:(x) => { console.log('value ' + x); },
  error:(err) => { console.error('error: ' + err); },
  complete:() => { console.log('complete'); }
});
console.log('after subscribe');