namespace :import do
  desc "Sample data for local development environment"
  task :file do
    page = Nokogiri::HTML(open('db/questions/file001.html'), nil, "UTF-8")
    raise ArgumentError unless page.css('b').count == page.css('i').count

    page.css('b').each_with_index do |question, i|
      Question.create(course_id: 1, body: question.text, answer: page.css('i')[i].text)
    end

  end
end
