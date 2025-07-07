import streamlit as st
import pandas as pd

class Library():

    def __init__(self):
        pass

    def add_books(self):
        pass

    def delete_books(self):
        pass

    def show(self):
        pass

class Frontend():
    def __init__(self):
        pass

    def show_web(self):
        st.title("Library Management System")

        df = pd.read_csv("data.csv", sep=";")
        st.table(df)

if __name__ == "__main__":
    frontend = Frontend()

    frontend.show_web()