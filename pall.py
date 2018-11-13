def rev(a):
    rev=0
    while(a!=0):

        rem=a%10
        rev=rev*10+rem
        a=a//10
    print(rev)
    if(rev==n):
        print("PALLINDROME")
    else:
        print("Not pallindrome")




n=int(input("Enter no:"))
rev(n)