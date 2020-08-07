Rails.application.routes.draw do
	root 'home#index'


	get 'skills', to: 'home#skills'
	get 'education', to: 'home#education'
	get 'experience', to: 'home#experience'
	get 'portfolio', to: 'home#portfolio'
	get 'testimonials', to: 'home#testimonials'
end
