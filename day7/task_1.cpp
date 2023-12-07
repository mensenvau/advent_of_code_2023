#include <bits/stdc++.h>
#include <fstream>
#include <string>
using namespace std;
struct T
{
    string num;
    int score, level = 0, order = 0;
};

int findIndex(char &target)
{
    vector<char> lt = {'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'};
    auto it = find(lt.begin(), lt.end(), target);
    if (it != lt.end())
    {
        return distance(lt.begin(), it);
    }
    else
    {
        return -1;
    }
}
bool compareTwoT(T a, T b)
{
    if (a.level != b.level)
    {
        return a.level < b.level;
    }

    for (int i = 0; i < a.num.size(); i++)
    {
        if (a.num[i] == b.num[i])
            continue;
        return findIndex(a.num[i]) > findIndex(b.num[i]);
    }

    return a.num > b.num;
}
void print(vector<T> tmp)
{
    cout << endl;
    for (int i = 0; i < tmp.size(); i++)
    {
        cout << tmp[i].num << " " << tmp[i].score << " " << tmp[i].level << " " << tmp[i].order << endl;
    }
    cout << endl;
}
void solution1(vector<T> tmp)
{
    // set level
    for (auto &item : tmp)
    {
        map<char, int> mp;
        vector<int> arr;
        for (int i = 0; i < item.num.size(); i++)
            mp[item.num[i]]++;
        for (auto x : mp)
            arr.push_back(x.second);
        sort(arr.begin(), arr.end());

        int len = arr.size();
        if (len == 1)
        {
            item.level = 6;
        }
        else if (len == 2)
        {
            if (arr[0] == 1 && arr[1] == 4)
                item.level = 5;
            else
                item.level = 4;
        }
        else if (len == 3)
        {
            if (arr[0] == 1 && arr[1] == 1 && arr[2] == 3)
                item.level = 3;
            else
                item.level = 2;
        }
        else if (len == 4)
        {
            item.level = 1;
        }
        else
            item.level = 0;
    }

    // sort score
    sort(tmp.begin(), tmp.end(), compareTwoT);
    print(tmp);

    long long ans = 0;
    for (int i = 0; i < tmp.size(); i++)
    {
        ans = ans + tmp[i].score * (i + 1);
    }

    cout << "Answer:" << ans;
}

int main()
{
    ifstream in("input.txt");
    vector<T> tmp;
    string num;
    int score;
    while (in >> num >> score)
    {
        tmp.push_back({num, score});
    }

    solution1(tmp);
}
