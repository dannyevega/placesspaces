post '/home' do
  user = User.find(session[:user_id])
  user.destinations << Destination.create(name: params[:destination])
  @destinations = user.destinations
  Destination.create(name: params[:destination])
  content_type :json
  params.to_json
end

post '/destinations/:id/update' do
  @destination = Destination.find(params[:id])
  @destination.update(visited: true)
end

