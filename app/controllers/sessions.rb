get '/sessions/new' do
  @login_error = "INVALID PASSWORD OR INCORRECT EMAIL ADDRESS" if params[:invalid]
  erb :index
end

post '/sessions' do
  @user = User.find_by_email(params[:email])
  if @user && @user.password == params[:password]
    session[:user_id] = @user.id
    redirect '/home'
  else
    redirect '/sessions/new?invalid=true'
  end
end

# get '/home' do
#   @user = User.find(session[:user_id])
#   erb :home
# end

delete '/sessions/:id' do
  session[:user_id] = nil
  redirect '/'
end

get '/home' do
  @user = User.find(session[:user_id])
  @destinations = @user.destinations
  erb :home
end