import streamlit as st
import pandas as pd

class Library():

    def __init__(self):
        self.file = "data.csv"

    def add_books(self, get_title, get_genre, get_author, get_status):
        with open(self.file, "a", newline="") as file:
            file.write(f"\n{get_title};{get_genre};{get_author};{get_status}\n")

    def delete_books(self):
        pass

    def show(self):
        pass

class Frontend():
    def __init__(self):
        self.df = pd.read_csv("data.csv", sep=";")

    def show_web(self):

        if "library" not in st.session_state:
            st.session_state.library = Library()

        st.title("Library Management System")

        table = st.data_editor(self.df)
        st.divider()

    def show_form(self):

        genre = ["Fiction", "Non-Fiction", "Fantasy", "Mystery", "Romance", "Biography", "Self-Help"]
        progress = ["Complete", "Unread", "In Progress"]

        if "library" not in st.session_state:
            st.session_state.library = Library()

        with st.form("Add a book"):
            st.subheader("Register a book")
            col1, col2 = st.columns([3, 1])
            with col1:
                add_title = st.text_input(label="Book Title" ,placeholder="Enter Title")
                add_author = st.text_input(label="Author", placeholder="Enter Author")
            with col2:
                add_genre = st.selectbox("Genre", genre)
                add_status = st.selectbox("Status", progress)

            form_click = st.form_submit_button("Submit")
            if form_click:
                st.success("Book is registered!")

                st.session_state.library.add_books(add_title, add_genre, add_author, add_status)

if __name__ == "__main__":
    frontend = Frontend()

    frontend.show_web()
    frontend.show_form()