use std::io; // bring input/output library from standard library
use rand::Rng;// random number generator
use std::cmp::Ordering;


fn main() {
    println!("Guess a number !");
    println!("Please input your guess");

    let mut guess = String::new();
    let secret = rand::thread_rng().gen_range(1..=100); // thread.rng(): give particular random number genertor depend on gen_range(start..=end)t
    io::stdin().read_line(&mut guess).expect("Failed to read line");
    //shadowing the same varible's name
    // convert from String to Integer by using 
    // trim() : elimate any whitespace at the beginning and end 
    // parse() : convertor between variable type's
    // ": u32" : tell Rust we'll annotate the variable type, since u32 is an unsinged, 32 bit integer.
    let guess: u32 = guess.trim().parse().expect("Please type a number");

    println!("The secret number: {secret}");
    println!("You guessed: {guess}");
    

    match guess.cmp(&secret) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
    // let x = 10;
    // match x {
    //     x if x > 10 => println!("Work"),
    //     _ => println!("Less than or equal to 10") // catch-all pattern all the possible value that are previousily not match with other values)
    // };
    // let y =1;

    // println!("x + y ={} {} ", x + y, x);

}
