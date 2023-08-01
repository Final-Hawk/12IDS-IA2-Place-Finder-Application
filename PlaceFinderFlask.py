import sqlite3    
from flask import Flask, render_template
app = Flask(__name__) #creates an app
# Establishing connection
# open a SQLite connection
connection = sqlite3.connect('database.db')
cur = connection.cursor() # create a database cursor

cur.execute('SELECT DESCRIPTION,STREET,SUBURB FROM boat_ramp_locations') 
            # Return Description, Street, and Suburb from boat ramp locations table
boat_ramp_locations = cur.fetchall() #fetches all the records (rows) from the query

cur.execute('SELECT PARK_NAME,HOUSE_NUMBER,STREET_ADDRESS,SUBURB FROM park_locations') 
            # Return Park Name, House Number, Street Address, and Suburb from park locations table
park_locations = cur.fetchall()  #fetches all the records (rows) from the query

cur.execute('SELECT PARK_NAME,ITEM_DESCRIPTION FROM trail_locations') 
            # Return Park Name and Item Description from trail locations table
trail_locations = cur.fetchall()  #fetches all the records (rows) from the query

cur.close()# close the cursor connection

@app.route('/') # The landing page will run the function below to generate HTML 
def index():    
    return render_template('index.html', boats=boat_ramp_locations, parks=park_locations, trails=trail_locations)   
        #render the html from the templates folder that you create!

if __name__ == '__main__':  #if this is the main file for the application, run the application
    app.run()