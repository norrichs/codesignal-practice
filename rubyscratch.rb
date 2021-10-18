# def addTwoDigits(n)
# 	n.to_s[0].to_i + n.to_s[1].to_i
	
# end

# def addTwoDigits_2(n)
# 	n.digits.sum
# end


# puts addTwoDigits_2(209)



# a = 0
# p a.allbits?(0)

# a = "105"

# puts "%#X" % a


# a = [1,2,3]

# a.repeated_combination(3) { |combo| p combo}

# b = [1,2,3,4]
# c = b.permutation(2) {|perm| p perm}

# hash = 
# 	{
# 		:a=> 1,
# 		"b"=> 2
# 	}

# b = hash.inspect()
# p b

# class Person
# 	def initialize
# 		@instance_var = "instance variable"
# 		@@class_var = "class variable"
# 	end

# 	def say_hi
# 		"HI, I have an #{@instance_var}"
# 	end

# 	def self.say_hi
# 		"Hi, I hav a #{@@class_var}"
# 	end
# end

# bob = Person.new
# p bob.say_hi
# p Person.say_hi


# def one_two_three
# 	yield 1
# 	yield 2
# 	yield 3
# end

# one_two_three { |n| puts n * 10 }
# one_two_three { |x| puts (x.to_f / 5).to_f }

# def explicit_block(&block)
# 	if block_given?
# 		block.call 10
# 	else
# 		puts "blockless"
# 	end
# end

# explicit_block { |n| puts "Explicit block called #{n / 2}"}
# explicit_block

# def something


# def test_loops(arr)
# 	arr.each do |el|
# 		p el
# 	end
# end


# a = %w{once upon a time}
# p a
# test_loops(a)


# a = "test"
# b = a
# # a = "test 2"
# a[4]='2'
# p a
# p b

require 'mathn'

Prime.each { |x| puts "a prime number #{x}"}