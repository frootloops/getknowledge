namespace :import do
  desc "Sample data for local development environment"
  task :file do
    page = Nokogiri::HTML(open('db/questions/file001.html'), nil, "UTF-8")
    raise ArgumentError unless page.css('b').count == page.css('i').count

    page.css('b').each_with_index do |question, i|
      body = question.text.strip
      answer = page.css('i')[i].text.strip
      Question.create(course_id: 1, body: body, answer: answer)
    end

  end
end
