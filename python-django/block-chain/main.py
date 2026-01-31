class Vihicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of the {self.year} {self.make} {self.model} is now running."
    def stop_engine(self):
        return f"The engine of the {self.year} {self.make} {self.model} has been turned off."

Vihicle1 = Vihicle("Toyota", "Corolla", 2020)
print(Vihicle1.start_engine())

class Car(Vihicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors

    def honk_horn(self):
        return "Beep beep!"
    def car_info(self):
        return f"{self.year} {self.make} {self.model} with {self.num_doors} doors."
Car1 = Car("Honda", "Civic", 2021, 4)
print(Car1.car_info())
print(Car1.honk_horn())