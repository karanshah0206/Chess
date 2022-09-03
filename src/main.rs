use std::io::{self, Read, Write};

fn main() {
    let mut p1_name = String::new();
    let mut p2_name = String::new();

    // Clear Screen + Welcome
    print!("{esc}c", esc = 27 as char);
    io::stdout().flush().unwrap();
    println!("Welcome to Chess!");

    // Get Player 1's Name
    print!("Enter Player 1's Name: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut p1_name).expect("Error while reading user input.");
    p1_name = p1_name.trim().to_string();

    // Get Player 2's Name
    print!("Enter Player 2's Name: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut p2_name).expect("Error while reading user input");
    p2_name = p2_name.trim().to_string();

    // Start Game On Command
    println!("\n\nHello {p1_name} and {p2_name}! Press return ready to play...");
    io::stdin().read(&mut [0]).unwrap();
}

