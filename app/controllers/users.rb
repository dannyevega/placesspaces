require 'bcrypt'

post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    @user = user
    redirect '/'
  end
end

get '/users/:id/update' do
  @user = User.find(session[:user_id])
  @destinations = @user.destinations
  erb :visited
end