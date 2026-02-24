use std::io; // bring input/output library from standard library
use rand::Rng;// random number generator
use std::cmp::Ordering;


fn main() {
    println!("Guess a number !");

    let secret = rand::thread_rng().gen_range(1..=100); // thread.rng(): give particular random number genertor depend on gen_range(start..=end)t
    //shadowing the same varible's name
    // convert from String to Integer by using 
    // trim() : elimate any whitespace at the beginning and end 
    // parse() : enum type : return OK and Err stages : convertor between variable type's
    // ": u32" : tell Rust we'll annotate the variable type, since u32 is an unsinged, 32 bit integer.

    println!("The secret number: {secret}");    
    loop {
         println!("Please input your guess");
         let mut guess = String::new();
         io::stdin().read_line(&mut guess).expect("Failed to read line");
         let guess: u32 = guess.trim().parse() {
             Ok(number) => number,
             Err(_) => continue, // if the user input is not a number, it will continue to the next iteration of the loop
         };
            println!("You guessed: {guess}");
         match guess.cmp(&secret) {
           Ordering::Less => println!("Too small!"),
           Ordering::Greater => println!("Too big!"),
           Ordering::Equal =>
           { 
               println!("You win!");
               break;
           }
         
       }
    }
    // let x = 10;
    // match x {
    //     x if x > 10 => println!("Work"),
    //     _ => println!("Less than or equal to 10") // catch-all pattern all the possible value that are previousily not match with other values)
    // };
    // let y =1;

    // println!("x + y ={} {} ", x + y, x);

}
