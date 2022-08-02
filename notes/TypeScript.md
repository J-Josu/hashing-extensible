# Language Notes

## Some declarations

```ts
// unknwon
let some1: unknown = 1;
// this is impossible because can infer type from unknown
const max1 = some1 + 9;
// any
let some2: any = 1;
// this is possible because type check no works on any
const max2 = some2 + 9;

// array
type Words = string[];

// function returning nothing
type Logger = (text: string): void;

// function no returning
type Logger = (text: string): never;



// weird usage
const someElement = document.querySelector(".foo");

someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value)
});
```

## Variables

- Type inference

- New values for a variable must be the same type as variable declaration


## Functions

- Arguments typed after name

- Return type:

    - Infered from return

    - Explicit typed after argument section

A function can:

- Return something

- Return nothing (void)

- No return (never)

    If a functions no returns must be something like and infinite loop, etc

## Objects

- Infered from declaration

    ```ts
    const some = {
        name : 'Name',
        id : 89
    }
    ```

- Explicit declared at usage

    ```ts
    const some: {name: string; id: number} = {
        name : 'Name',
        id : 89
    }
    ```

- Interface sintax

    ```ts
    interface Some {
        name: string;
        id: number;
    }

    // Optional properties with ?
    interface Some {
        name: string;
        id?: number;
    }

    // Methods too
    interface Some {
        name: string;
        id?: number;
        toString(times:number): string;
    }
    ```

    Interface names:

    - Prefix

        ```ts
        interface ISome {}
        ```
    - Postfix

        ```ts
        interface SomeInterface {}
        ```

## Type

- Union

```ts
let position : string | number = 'first';
```

- Alias

```ts
type Position = string | number;

let position : Position = 'first'
```
- Any

```ts
type Something = any;

const position : Something = 'first';
const frecuency : Something = 9.5;
```

- Assertion

```ts
const position : any = 'first';
const newPosition : string = position as string;
```

## Dom

### Types:

- HTML<something>


## Classes

Sintax

```ts
class ClassName {
    // properties
    prop: PropType;

    //constructor
    constructor(arg1: string, arg2: int) {
        this.prop = string;
        ...
    }

    method(): int {
        return 6
    }
}
```
Properties modifiers

- public

- private

    Only this knows about it

- protected

    Only on the defined class, inherited clases no has acces

- readonly

    Can't be changed

- static

    Only in class

Implements interfaces

```ts
interface UIInterface {
    width: number;
    height: number;
    update(deltaTime: number): void;
}

class MyUI implements UIInterface {
    width: number;
    height: number;
    
    constructor({width: number, height: number}) {
        this.width = width;
        this.height = height;
    }

    update(deltaTime: number): void {
        // some code
    }
}
```

Extends classes

```ts
class BetterUI extends MyUI {
}
```

## Enums

Sintax

```ts
enum Status {
    NotStarted,
    InProgress,
    Done
}
```
Enum name in UpperCamelCase as well as its types

Value assignation

```ts
enum MessageStatus {
    Sending = "SendingMessage",
    Recived = "RecivedMessage",
    Readed = "ReadedMessage",
}
```
Enums can be used as types

```ts
enum MessageStatus {
    Sending = "SendingMessage",
    Recived = "RecivedMessage",
    Readed = "ReadedMessage",
}

interface Message {
    content: string;
    status: MessageStatus;
}
```
