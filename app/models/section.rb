class Section < ActiveRecord::Base
  belongs_to :course
  has_many :questions
end
