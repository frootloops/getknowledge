class ApiController < ApplicationController
  def index
    question = Question.find_by(body: params[:q])

    if question && question.answer
      render text: question.answer
    else
      render status: :not_found, text: ""
    end
  end
end
