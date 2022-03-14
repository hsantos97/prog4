from flask import Flask, render_template, url_for, json
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from flask_bootstrap import Bootstrap
import requests
import json, os

app = Flask(__name__)
app.config["SECRET_KEY"] = "hard to guess string"
boostrap = Bootstrap(app)


class movieForm(FlaskForm):
    title = StringField("title")
    cast = StringField("cast")
    genres = SelectField(
        "genres",
        choices=[
            ("", ""),
            ("Drama", "Drama"),
            ("Comedy", "Comedia"),
            ("Animated", "Animação"),
            ("Horror", "Horror"),
            ("Family", "Family"),
            ("Superhero", "Superhero"),
        ],
    )
    submit = SubmitField("Enviar")


def getjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/", "movies.json")
    data = json.load(open(json_url))
    return data


movies = getjson()


@app.route("/", methods=["GET", "POST"])
def home():
    mf = movieForm()
    movieList = list()
    if mf.validate_on_submit():
        for mv in movies:
            if (mf.title.data in mv["title"].lower()) and getType(
                mf.genres.data, mv["genres"]
            ):
                movieList.append(mv)

    return render_template("home.html", movies=movieList, form=mf)


def getType(type, types):
    if type in types or type == "":
        return True
    else:
        return False


if __name__ == "__main__":
    app.run(debug=True)
