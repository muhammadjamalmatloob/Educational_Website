#include <iostream>
#include <ctime>
#include <conio.h>
#include <windows.h>
#include <string>
using namespace std;

long long int digitSum(long long int n){
    return (n/10 == 0)? n : n%10 + digitSum(n/10);
}

int power(int a, int b)
{
    if ( b == 0)
        return 1;
    else
        return a*power(a,b-1);
}

void printDigits(int b){
    int n = 1;
    int t = b;
    while (b/10 != 0)
    {
        b /= 10;
        n++;
    }
    for (int i = 1; i <= n; i++)
    {
        cout << t/power(10,n-i) << " ";
        t = t - (t/power(10,n-i))*power(10,n-i);
    }
}

void digits(int n){
    cout << "\n";
    int x = n, y = 1;
    while(x >= 10){
        x = x/10;
        y++; 
    }
    int a = 1;
    for(int i=1; i<y; i++){
        a=a*10;
    }    
    int d;
    for(int j=1;j<=y;j++){
        d = n/a;
        n = n%a;
        a = a/10;
        cout << "\033[5m" << d << "\t";
    }
    cout << "\n";
}
void reverse_digits(int n){
    while(n>0){
        cout << "\033[5m" << n%10 << "\t";
        n=n/10;
    }
}
int main(){
    printDigits(1023040);
    digits(9834);
    reverse_digits(6740);
    Sleep(9999);
	time_t now;
	tm* ltm;
	while (true)
	{
        now = time(0);
        ltm = localtime(&now);
        if((ltm->tm_hour) < 13)
		    cout << "\033[31m" << (ltm->tm_hour) << "\033[34m : ";
        else
            cout << "\033[31m" << ((ltm->tm_hour)%12) << "\033[34m : ";
		cout << "\033[31m" << (ltm->tm_min) << "\033[34m : ";
		cout << "\033[31m" << (ltm->tm_sec);
		Sleep(1000);
		system("cls");
	}
}