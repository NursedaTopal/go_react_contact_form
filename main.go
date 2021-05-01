package main

import (
	"net/http"
	"text/template"
)

type Contact struct {
	Name    string
	Email   string
	Message string
}

func main() {

	tmpl := template.Must(template.ParseFiles("form.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			tmpl.Execute(w, nil)
			return
		}
		details := Contact{

			Name:    r.FormValue("name"),
			Email:   r.FormValue("email"),
			Message: r.FormValue("message"),
		}

		_ = details

		tmpl.Execute(w, struct{ success bool }{true})

	})
	http.ListenAndServe(":8080", nil)

}
